import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION ?? "us-east-1",
  endpoint: process.env.DYNAMODB_ENDPOINT,
  credentials: process.env.DYNAMODB_ENDPOINT
    ? {
        accessKeyId: "local",
        secretAccessKey: "local",
      }
    : undefined,
});

export const docClient = DynamoDBDocumentClient.from(client);

export function isDatabaseAvailable() {
  return Boolean(process.env.DYNAMODB_ENDPOINT);
}
