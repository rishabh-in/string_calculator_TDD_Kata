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

test('handles new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom single-character delimiter with //;\\n', () => {
  expect(add("//;\\n1;2")).toBe(3);
});

test('throws error when negative numbers are passed (list all negatives)', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});