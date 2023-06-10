import awsServerlessExpress from 'aws-serverless-express';
import app from "./app";
const server = awsServerlessExpress.createServer(app)


export const handler = (event, context) => {
  console.log("handler is running..");
  console.log(event, context);
  return awsServerlessExpress.proxy(server, event, context);
};