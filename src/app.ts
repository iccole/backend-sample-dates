import express from "express";
import {
  timeFromYesterday,
  timeUntilCustomDate,
  timeUntilNextMonth,
  timeUntilNextWeek,
  timeUntilTomorrow,
  validateInputDate,
} from "./timeUtils";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const teamName = process.env.TEAM_NAME || "World!";

app.get("/", (req, res) => {
  res.send({ welcome_message: `Hello, ${teamName}!`, version: '1.1' })
});

app.get("/tomorrow", (req, res) => {
  buildJSONResponse(res, timeUntilTomorrow());
});

app.get("/yesterday", (req, res) => {
  buildJSONResponse(res, timeFromYesterday());
});

app.get("/next_week", (req, res) => {
  buildJSONResponse(res, timeUntilNextWeek());
});

app.get("/next_month", (req, res) => {
  buildJSONResponse(res, timeUntilNextMonth());
});

app.get("/at_time", (req, res) => {
  const dateString = req.query.date;
  if (validateInputDate(dateString)) {
    buildJSONResponse(res, timeUntilCustomDate(dateString));
  } else {
    res.sendStatus(403);
  }
});

const buildJSONResponse = (res, time) => {
  res.json({ milliseconds: time });
};

export default app;
