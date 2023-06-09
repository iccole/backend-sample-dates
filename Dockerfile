FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn install

COPY . .

RUN yarn tsc

EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD ["start"]
