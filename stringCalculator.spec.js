import add from './stringCalculator';

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself when single number is passed', () => {
  expect(add("1")).toBe(1);
});

test('returns sum of two numbers separated by comma', () => {
  expect(add("1,5")).toBe(6);
});

test('returns sum of multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});