import serverlessExpress from '@vendia/serverless-express';
import app from './app';

export const handler = (event, context) => {
    console.log('handler is running..');
    console.log(event, context);
    return serverlessExpress({ app });
}