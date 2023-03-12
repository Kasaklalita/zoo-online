import { test, expect } from "vitest";

const sum = (a: number, b: number) => {
  return a + b;
};

test("Add 2 numbers", () => {
  expect(sum(2, 3)).toEqual(5);
});

test("Add 2 numbers 2", () => {
  expect(sum(0, 0)).toEqual(0);
});
