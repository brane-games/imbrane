export const ConvertCSharpToGDScript = (input: string): string => {
  const csharpClass = parseCSharpClass(input);

  const gdscriptClassDefinition = convertToGDScriptClass(csharpClass);

  return gdscriptClassDefinition;
};
// Helper function to parse a C# class definition string into a TypeScript object
function parseCSharpClass(csharpClassDefinition: string): any {
  const classNameRegex = /class ([^{]+){/;
  const classNameMatch = csharpClassDefinition.match(classNameRegex);
  const className = classNameMatch ? classNameMatch[1].trim() : "";

  const propertyRegex = /(public|private|protected)?\s*(\w+)\s+(\w+)\s*\{.*\}/g;
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

  let gdscriptClassDefinition = `@class_name ${className}\n\n`;

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
