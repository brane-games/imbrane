import React, { useEffect, useState } from "react";
import styles from "./gdscript-csharp-converter.module.css";
import hljs from "highlight.js";
import { ConvertCSharpToGDScript } from "./converter";

export default function GdscriptCsharpConverter(): JSX.Element {
  const [csharpCode, setCsharpCode] = useState("public class MyClass {\n\n}");
  const [gdscript, setGdscript] = useState("");

  const convert = (): void => {
    const gdscript = ConvertCSharpToGDScript(csharpCode);
    setGdscript(gdscript);
  };

  async function copyToClipboard() {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(gdscript);
    }
  }

  useEffect(() => {
    hljs.highlightAll();
  }, [gdscript]);

  useEffect(() => {
    console.log("highlighting!", document.querySelector("#csharp"));
    hljs.highlightElement(document.querySelector("#csharp")!);
  }, [csharpCode]);

  return (
    <div className="row" style={{ margin: "auto" }}>
      <div className={styles.card}>
        <h2>Paste C# code</h2>
        <textarea
          id="csharp"
          className={"language-csharp " + styles.codeArea}
          onChange={(ev) => setCsharpCode(ev.target.value)}
          value={csharpCode}
        ></textarea>
      </div>
      <button
        style={{
          height: "30px",
          margin: "auto",
          marginLeft: "12px",
          marginRight: "12px",
        }}
        onClick={convert}
      >
        Convert ={">"}
      </button>
      <div className="card">
        <h2>GDScript output</h2>
        <pre className={styles.codeArea}>
          <code className={"language-haxe"}>{gdscript}</code>
        </pre>
        <button onClick={copyToClipboard}>Copy content</button>
      </div>
    </div>
  );
}
