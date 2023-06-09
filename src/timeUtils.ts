/** Expects Date() format
 * returns time between the two in miliseconds
 * */
const timeUntil = (endDate: Date) => {
  const currentTime = new Date();
  return endDate.getTime() - currentTime.getTime();
};

/** Shamelessly cribbed from online
 * gets the date of Monday of the current week
 * https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
 * */
const getSunday = (d) => {
  d = new Date(d);
  const day = d.getDay(),
    diff = d.getDate() - day;
  return new Date(d.setDate(diff));
};

/** Another shameless cribb from online
 * Returns first day of the next month
 * https://bobbyhadz.com/blog/javascript-get-first-day-of-next-month
 * */
const getFirstDayOfNextMonth = () => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
};

/**
 * Removes all hours minutes and seconds from date
 * */
const removeTimeInfo = (date) => {
  date.setHours(0, 0, 0, 0);
  return date;
};

/** Takes a date string and validates it to
 * ISO 8601 standard
 * Updated from https://stackoverflow.com/a/3143231
 * */
export const validateInputDate = (dateString) => {
  const date_regex =
    /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
  return date_regex.test(dateString);
};

export const timeUntilTomorrow = () => {
  let time = new Date();
  time.setDate(time.getDate() + 1);
  time = removeTimeInfo(time);
  return timeUntil(time);
};

export const timeFromYesterday = () => {
  const time = new Date();
  time.setDate(time.getDate() - 1);
  // set to last possible millisecond of the day before
  time.setHours(23, 59, 59, 999);
  return timeUntil(time);
};

export const timeUntilNextWeek = () => {
  let time = getSunday(new Date());
  time.setDate(time.getDate() + 7);
  time = removeTimeInfo(time);
  return timeUntil(time);
};

export const timeUntilNextMonth = () => {
  let time = getFirstDayOfNextMonth();
  time = removeTimeInfo(time);
  return timeUntil(time);
};

export const timeUntilCustomDate = (dateString) => {
  const customDate = new Date(dateString);
  return timeUntil(customDate);
};
