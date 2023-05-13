import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { TableClient } from "@azure/data-tables";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");

  const client = TableClient.fromConnectionString(
    process.env["AzureWebJobsStorage"],
    "masterOfChess"
  );

  const entitiesIter = client.listEntities<any>();
  var entities: any[] = [];
  for await (const entity of entitiesIter) {
    entities.push(entity);
  }

  context.res = {
    body: entities,
  };
};

export default httpTrigger;

interface GameTask {
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
