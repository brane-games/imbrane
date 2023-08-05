import React, { useEffect, useState } from "react";
import styles from "./datetime-to-ticks.module.css";

export default function DateTimeToTicks(): JSX.Element {
  const [dateTime, setDatetime] = useState("2022-11-11");
  const [ticksResult, setTicksResult] = useState("");
  const [age, setAge] = useState("");
  const [ticks, setTicks] = useState(621355968000000000);
  const [dateTimeResult, setDateTimeResult] = useState("");

  const convertToTicks = () => {
    const date = new Date(dateTime);
    calculateAge(date);
    setTicksResult((date.getTime() * 10000 + 621355968000000000).toString());
  };

  const convertToDatetime = () => {
    var ticksPerMillisecond = 10000;
    var epochTicks = 621355968000000000;
    var ticksSinceEpoch = ticks - epochTicks;
    var millisecondsSinceEpoch = ticksSinceEpoch / ticksPerMillisecond;

    const res = new Date(millisecondsSinceEpoch).toISOString();

    setDateTimeResult(res.split("T")[0]);
    calculateAge(new Date(millisecondsSinceEpoch));
  };

  const calculateAge = (res: Date) => {
    var today = new Date();
    var birthDate = new Date(res);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    setAge(age.toString());
  };

  return (
    <div style={{ margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "64px" }}>
        Datetime to ticks converter
      </h1>
      <div className="row" style={{ margin: "auto" }}>
        <div>
          <h2>Datetime</h2>
          <textarea
            id="datetime"
            className={styles.codeArea}
            onChange={(ev) => setDatetime(ev.target.value)}
            value={dateTime}
          ></textarea>
        </div>
        <button
          style={{
            height: "30px",
            margin: "auto",
            marginLeft: "12px",
            marginRight: "12px",
          }}
          onClick={convertToTicks}
        >
          Convert ={">"}
        </button>
        <div className={styles.codeArea}>
          <h2 style={{ margin: "8px" }}>Ticks</h2>
          <span>{ticksResult}</span>
        </div>
      </div>
      <div className="row" style={{ margin: "auto" }}>
        <div className={styles.card}>
          <h2>Ticks</h2>
          <textarea
            id="datetime"
            className={styles.codeArea}
            onChange={(ev) => setTicks(parseInt(ev.target.value))}
            value={ticks}
          ></textarea>
        </div>
        <button
          style={{
            height: "30px",
            margin: "auto",
            marginLeft: "12px",
            marginRight: "12px",
          }}
          onClick={convertToDatetime}
        >
          Convert ={">"}
        </button>
        <div className={styles.codeArea}>
          <h2 style={{ margin: "8px" }}>Datetime</h2>
          <span>{dateTimeResult}</span>
        </div>
      </div>
      <div className="row">
        <span style={{ margin: "auto" }} className={styles.codeArea}>
          {age}
        </span>
      </div>
    </div>
  );
}
