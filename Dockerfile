FROM public.ecr.aws/lambda/nodejs:14 AS build-stage

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install -g yarn

RUN yarn install

COPY . ./

RUN yarn tsc

FROM build-stage AS dev
EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD ["start"]


FROM build-stage AS prod

CMD ["/app/dist/lambda.handler"]