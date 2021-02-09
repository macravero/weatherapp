import { tempConverter, dayParser } from "../utils/parsers";

describe("tempConverter test suite", () => {
  test("it should return temperature rounded up", () => {
    let valid = "-25.56";
    let expected = `-26`;
    expect(tempConverter(valid)).toBe(expected);
  });
  test("it should return temperature rounded down", () => {
    let valid = "-25.49";
    let expected = `-25`;
    expect(tempConverter(valid)).toBe(expected);
  });
  test("it should return invalid temperature", () => {
    let invalid = "hello";
    let expected = "invalid temperature";
    expect(tempConverter(invalid)).toBe(expected);
  });
});

describe("dayParser test suite", () => {
  test("it should return the correct day", () => {
    let valid = 1612994400; // Wednesday 10th of February 2021
    let expected = "Wednesday";
    expect(dayParser(valid)).toBe(expected);
  });
  test("it should not return the incorrect day", () => {
    let valid = 1613167200; // Friday 12th of February 2021
    let unexpected = "Thursday";
    let expected = "Friday";
    expect(dayParser(valid)).not.toBe(unexpected);
    expect(dayParser(valid)).toBe(expected);
  });
});
