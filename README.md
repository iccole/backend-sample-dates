# backend-sample app

This sample application was born from a take home project sent to me during the screening process of my last job. The initial request was to create an API that would return the number of milliseconds between now and tomorrow, yesterday, next week, and next month. 

Initially, the project was `.js` with minimal docker-compose functionality to run the express app. I've updated things for `typescript` transpilation to `.js`, some dev nice-to-haves (`husky` pre-commit hooks and `eslint` linter), `jest` testing, and a `CI/CD` pipeline to run tests and perform deployments to a running public lambda API via my AWS account.


## ESLint + Prettier
Why ESLint + Prettier? 

I've taken part in dev teams where code reviews pile up or where individual devs had code-style differences. With ESLint + Prettier the various petty level style differences are done away with (ESLint rules are created by very smart very opiniated devs!). Teams can supress rules or create their own. Additionally, ESLint can detect and flag a variety of bad coding practices (which can be a boon to junior devs in the absence of more senior devs). The overall point is that a computer can perform a part of the review freeing up devs to looks for logical errors or other higher level concerns. In this repo it runs on every commit, blocks the commit if there are errors found, and gives warnings.

<img width="568" alt="Screen Shot 2023-06-11 at 5 50 00 PM" src="https://github.com/iccole/backend-sample-dates/assets/8813683/c964bb22-2729-40aa-a33f-c68707c043a4">


Run

```
docker-compose build
```

Then

```
docker-compose up
```

This should pull up the application with hot swapping from pm2

# API Endpoints

The following endpoint return the diff in time in milliseconds between today and the date mentioned

- /tomorrow
- /yesterday
- /next_week
- /next_month
- /at_time?date=2017-06-17T00:00:00.000Z (takes ISO 8601 format)
