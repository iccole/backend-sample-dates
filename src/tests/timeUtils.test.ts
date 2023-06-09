import request from "supertest";
import app from "../app";

const millisecondsInADay = 86400000;

describe("Testing time util functions", () => {
  // Set system to a fixed date for tests
  // Midnight Jan 01, 1990 EST
  jest.useFakeTimers().setSystemTime(new Date('1990-01-01T05:00:00Z'));

  test("Testing time until tomorrow", async () => {
    const respone = await request(app).get("/tomorrow");
    
      const { milliseconds } = respone.body;
      expect(milliseconds).toBe(millisecondsInADay);
  });

  test("Testing time until Yesterday", async () => {
    const respone = await request(app).get("/yesterday");
    
      const { milliseconds } = respone.body;
      expect(milliseconds).toBe(-1);
  });

  test("Testing time until next_week", async () => {
    const respone = await request(app).get("/next_week");
    
      const { milliseconds } = respone.body;
      // Jan 01, 1990 is Monday
      expect(milliseconds).toBe(millisecondsInADay * 6);
  });

  test("Testing failed check time until custom time (/at_time)", async () => {
    const respone = await request(app).get("/at_time?date=blah");
    expect(respone.statusCode).toBe(403);
  });

  test("Testing successful check time until custom time (/at_time)", async () => {
    const respone = await request(app).get("/at_time?date=1990-01-06T17%3A00%3A00Z");
    
      const { milliseconds } = respone.body;
      expect(respone.statusCode).toBe(200);
      expect(milliseconds).toBe(millisecondsInADay * 5.5);
  });
});
