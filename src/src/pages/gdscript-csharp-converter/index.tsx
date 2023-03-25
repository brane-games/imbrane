import React, { useEffect, useState } from "react";
import styles from "./gdscript-csharp-converter.module.css";
import hljs from "highlight.js";

export default function GdscriptCsharpConverter(): JSX.Element {
  const [csharpCode, setCsharpCode] = useState("public class MyClass {\n\n}");
  const [gdscript, setGdscript] = useState("");

  const ConvertCSharpToGDScript = (input: string): string => {
    const csharpClass = parseCSharpClass(input);

    const gdscriptClassDefinition = convertToGDScriptClass(csharpClass);

    return gdscriptClassDefinition;
  };

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
    hljs.highlightElement(document.querySelector("#csharp")!);
  }, [csharpCode]);

  return (
    <div style={{ margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "64px" }}>
        CSharp to GDScript DTO converter
      </h1>
      <div className="row" style={{ margin: "auto" }}>
        <div className={styles.card}>
          <h2>Paste C# class here</h2>
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
          <h2 style={{ margin: "8px" }}>GDScript output</h2>
          <pre className={styles.codeArea}>
            <code className={"language-haxe"}>{gdscript}</code>
          </pre>
          <button onClick={copyToClipboard}>Copy content</button>
        </div>
      </div>
    </div>
  );
}

// Helper function to parse a C# class definition string into a TypeScript object
function parseCSharpClass(csharpClassDefinition: string): any {
  const classNameRegex = /class ([^{]+){/;
  const classNameMatch = csharpClassDefinition.match(classNameRegex);
  const className = classNameMatch ? classNameMatch[1].trim() : "";

  const propertyRegex =
    /(public|private|protected)?\s*(\w+)?\??\s+(\w+)\s*\{.*\}/g;
  const properties = [];

  let match;
  while ((match = propertyRegex.exec(csharpClassDefinition))) {
    const [, accessModifier, type, name] = match;
    properties.push({ accessModifier, type, name });
  }

  return { className, properties };
}

function convertToGDScriptClass(csharpClass: any): string {
  const { className, properties } = csharpClass;

  let gdscriptClassDefinition = `class_name ${className}\n\n`;

  for (const property of properties) {
    const { accessModifier, type, name } = property;
    const gdscriptName = convertToSnakeCase(name);
    const gdscriptType = convertTypeToGDScript(type);

    gdscriptClassDefinition += `var ${gdscriptName}: ${gdscriptType}\n`;
  }
  gdscriptClassDefinition += "\n";

  gdscriptClassDefinition += `func _init(data: Dictionary):\n`;
  for (const property of properties) {
    const { name } = property;
    const gdscriptName = convertToSnakeCase(name);
    gdscriptClassDefinition += `    ${gdscriptName} = data.get("${gdscriptName}")\n`;
  }

  return gdscriptClassDefinition;
}

// Helper function to convert a C# type to a GDScript type
function convertTypeToGDScript(csharpType: string): string {
  switch (csharpType) {
    case "bool":
      return "bool";
    case "byte":
    case "short":
    case "int":
    case "long":
      return "int";
    case "float":
    case "double":
      return "float";
    case "string":
      return "String";
    case "Nullable<bool>":
      return "bool";
    case "Nullable<byte>":
    case "Nullable<short>":
    case "Nullable<int>":
    case "Nullable<long>":
      return "int";
    case "Nullable<float>":
    case "Nullable<double>":
      return "float";
    case "Nullable<string>":
      return "String";
    default:
      return "Object";
  }
}

function convertToSnakeCase(name: string): string {
  return name
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");
}
