import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import "ka-table/style.css";

import { DataType, Table } from "ka-table";
import { EditingMode, SortingMode } from "ka-table/enums";
import CustomEditor, { RowValueChange } from "./custom-editor";

const CustomAttributesDemo: React.FC = () => {
  const [data, setData] = useState<Array<GameTask>>();
  const [isEditMode, setIsEditMode] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://task-reports-function.azurewebsites.net/api/GetTasks"
        );
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (password.length > 10) {
      const d = data?.concat([]);
      setData(null);

      setTimeout(() => {
        setData(d);
      }, 10);
    }
  }, [password]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "`") {
        setIsEditMode((mode) => !mode);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const saveRow = (change: RowValueChange) => {
    const changedRow = data.find((obj) => obj.rowKey == change.rowKeyValue);
    changedRow[change.changedValueKey] = change.value;

    fetch("https://task-reports-function.azurewebsites.net/api/UpdateTasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: password,
      },
      body: JSON.stringify(changedRow),
    });
  };

  const MasterOfChessBannerUrl =
    require("@site/static/img/master_of_chess/master_of_chess_banner.jpg").default;

  return (
    <div className={styles.centralAlign}>
      <div className={styles.hiddenBg}></div>
      <img role="img" src={MasterOfChessBannerUrl} />
      <div>
        <br />
        All the bugs, improvements and suggestions end up here.
        <br />
        <br />
        {isEditMode && (
          <>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />{" "}
            {password.length > 10 && (
              <button
                onClick={() =>
                  setData((d) =>
                    d.concat([
                      {
                        rowKey: `${
                          Math.max(...d.map((obj) => parseInt(obj.rowKey))) + 1
                        }`,
                        partitionKey: "preview",
                        title: "Bug",
                        comments: "",
                        dateReported: new Date().toISOString().split("T")[0],
                        description: "Description of the bug.",
                        priority: TaskPriority.Medium,
                        reporterName: "Myself",
                        status: TaskStatus.Open,
                        type: TaskType.Bug,
                        imageUrl: "",
                      },
                    ])
                  )
                }
              >
                Add
              </button>
            )}
          </>
        )}
      </div>
      {!data ? (
        <div>Loading ... </div>
      ) : (
        <Table
          columns={[
            {
              key: "title",
              title: "Title",
              dataType: DataType.String,
              filterRowOperator: ">",
            },
            {
              key: "description",
              title: "Description",
              dataType: DataType.String,
              filterRowOperator: ">",
            },
            {
              key: "priority",
              title: "Priority",
              dataType: DataType.String,
              filterRowOperator: ">",
            },
            {
              key: "status",
              title: "Status",
              dataType: DataType.String,
              filterRowOperator: ">",
            },
            {
              key: "type",
              title: "Type",
              dataType: DataType.String,
              filterRowOperator: ">",
            },
            {
              key: "reporterName",
              title: "Reporter",
              dataType: DataType.String,
              filterRowOperator: ">",
            },
            {
              key: "dateReported",
              title: "Date Reported",
              dataType: DataType.Date,
              filterRowOperator: "<",
            },
          ]}
          format={({ column, value }) => {
            if (column.dataType === DataType.Date) {
              return (
                value &&
                value.toLocaleDateString("en", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })
              );
            }
          }}
          paging={{
            enabled: false,
            pageSize: 30,
            pageIndex: 0,
          }}
          data={data}
          rowKeyField={"rowKey"}
          sortingMode={SortingMode.Single}
          editingMode={
            isEditMode && password.length > 10
              ? EditingMode.Cell
              : EditingMode.None
          }
          childComponents={{
            dataRow: {
              elementAttributes: ({ rowData }) => ({
                style: {
                  backgroundColor:
                    rowData.status == "Completed"
                      ? "rgba(0, 255, 0, 0.1)"
                      : rowData.priority == "High"
                      ? "rgba(255, 0, 0, 0.1)"
                      : rowData.priority == "Medium"
                      ? "rgba(225, 20, 20, 0.1)"
                      : "rgba(100, 150, 150, 0.2)",
                },
                title: `${rowData.name}: ${rowData.score}`,
              }),
            },
            cellEditor: {
              content: (props) => {
                switch (props.column.key) {
                  default:
                    return <CustomEditor {...props} saveRow={saveRow} />;
                }
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default CustomAttributesDemo;

interface GameTask {
  rowKey: string;
  partitionKey: string;
  title: string;
  description: string;
  reporterName: string;
  dateReported: string;
  type: TaskType;
  status: TaskStatus;
  priority: TaskPriority;
  comments: string;
  imageUrl?: string;
}

enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

enum TaskType {
  Bug = "Bug",
  Feature = "Feature",
  Suggestion = "Suggestion",
  UIImprovement = "UI Improvement",
}

enum TaskStatus {
  Open = "Open",
  InProgress = "In Progress",
  Completed = "Completed",
  Deployed = "Deployed",
}
