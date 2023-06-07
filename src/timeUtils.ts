/** Expects Date() format
 * returns time between the two in miliseconds
 * */
const timeUntil = (endDate: Date) => {
  const currentTime = new Date();
  return endDate.getMilliseconds() - currentTime.getMilliseconds();
};

/** Shamelessly cribbed from online
 * gets the date of Monday of the current week
 * https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
 * */
const getMonday = (d) => {
  d = new Date(d);
  const day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
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
  return new Date(date.toDateString());
};

/** Takes a date string and validates it to
 * ISO 8601 standard
 * */
export const validateInputDate = (dateString) => {
  const date_regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  return date_regex.test(dateString);
};

export const timeUntilTomorrow = () => {
  let time = new Date();
  time.setDate(time.getDate() + 1);
  time = removeTimeInfo(time);
  return timeUntil(time);
};

export const timeFromYesterday = () => {
  let time = new Date();
  time.setDate(time.getDate() - 1);
  time = removeTimeInfo(time);
  return timeUntil(time);
};

export const timeUntilNextWeek = () => {
  let time = getMonday(new Date());
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
