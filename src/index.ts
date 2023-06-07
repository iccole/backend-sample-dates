const express = require("express");
const app = express();
const port = 3000;
const timeUtils = require("./timeUtils.js");
const teamName = process.env.TEAM_NAME || "World!";

app.get("/", (req, res) => {
  res.send(`Hello, ${teamName}`);
});

app.get("/tomorrow", (req, res) => {
  buildJSONResponse(res, timeUtils.timeUtilTomorrow());
});

app.get("/yesterday", (req, res) => {
  buildJSONResponse(res, timeUtils.timeFromYesterday());
});

app.get("/next_week", (req, res) => {
  buildJSONResponse(res, timeUtils.timeUntilNextWeek());
});

app.get("/next_month", (req, res) => {
  buildJSONResponse(res, timeUtils.timeUntilNextMonth());
});

app.get("/at_time", (req, res) => {
  const dateString = req.query.date;
  if (timeUtils.validateInputDate(dateString)) {
    buildJSONResponse(res, timeUtils.timeUntilCustomDate(dateString));
  } else {
    res.sendStatus(403);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const buildJSONResponse = (res, time) => {
  res.json({ time_remaining: time });
};
