# backend-sample app

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
