import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import "ka-table/style.css";

import { DataType, Table } from "ka-table";
import { EditingMode, SortingMode } from "ka-table/enums";
import CustomEditor, { RowValueChange } from "./custom-editor";

const CustomAttributesDemo: React.FC = () => {
  const [data, setData] = useState<Array<GameTask>>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [password, setPassword] = useState("");
  const [completed, setCompleted] = useState(false);
  const [inProgress, setInProgress] = useState(true);
  const [open, setOpen] = useState(true);
  const [tasksToShow, setTasksToShow] = useState([]); // Filtered tasks to show


  useEffect(()=>{
    const filteredTasks = data.filter((task) => {
      if (completed && task.status.includes('Completed')) {
        return true;
      }
      if (inProgress && task.status.includes('Progress')) {
        return true;
      }
      if (open && task.status.includes("Open")) {
        return true;
      }
      return false;
    });

    // Update tasksToShow state
    setTasksToShow(filteredTasks);
  }, [completed, inProgress, open, data])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://task-reports-function.azurewebsites.net/api/GetTasks"
        );
        const res = await response.json();
        setData(res);
        setOpen(true)
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
      <div style={{padding:"12px"}}>
        All bugs, suggestions and features from community end up here.
        <div className={styles.checkboxContainer}>
          <label>
            <input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} />
            Completed
          </label>
          <br />
          <label>
            <input type="checkbox" checked={inProgress} onChange={e => setInProgress(e.target.checked)} />
            In Progress
          </label>
          <br />
          <label>
            <input type="checkbox" checked={open} onChange={e => setOpen(e.target.checked)} />
            Open
          </label>
        </div>
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
                        rowKey: `${Math.max(...d.map((obj) => parseInt(obj.rowKey))) + 1
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
      {!data.length ? (
        <div style={{padding: "32px", fontWeight: 800, left: "50%", textAlign:"center"}}>Loading ... </div>
      ) : (
        <div className={styles.kaTable}>
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
              if (column.key == "description" && !isEditMode) {
                return <DescriptionButton value={value} />;
              }
            }}
            paging={{
              enabled: false,
              pageSize: 30,
              pageIndex: 0,
            }}
            data={tasksToShow}
            rowKeyField={"rowKey"}
            sortingMode={SortingMode.Single}
            editingMode={
              isEditMode && password.length > 10
                ? EditingMode.Cell
                : EditingMode.None
            }
            childComponents={{
              dataRow: {
                elementAttributes: ({ rowData, rowKeyField }) => ({
                  style: {
                    fontWeight: rowData.priority == "High" ? 600 : 400,
                    backgroundColor:
                      rowData.status == "Completed"
                        ? "#e0ffd4"
                        : rowData.priority == "High"
                          ? "#c7b6a2"
                          : rowData.priority == "Medium"
                            ? "#edede3"
                            : "#d1deb2",
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
        </div>
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

const DescriptionButton: React.FC<any> = ({ value }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpened(true)} className={styles.button}>
        Details
      </button>

      {isOpened && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalText}>{value}</div>
            <button
              onClick={() => setIsOpened(false)}
              className={styles.closeButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
