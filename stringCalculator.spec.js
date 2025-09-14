import add from './stringCalculator';

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number itself when single number is passed', () => {
  expect(add("1")).toBe(1);
});