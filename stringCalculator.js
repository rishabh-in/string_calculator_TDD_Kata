export default function add(numbers) {
  if (numbers === "") return 0;

  if (!numbers.includes(',') && !numbers.includes('\n')) {
    return Number(numbers);
  }

  // split by comma or newline
  const nums = numbers.split(/,|\n/).map(n => Number(n));
  return nums.reduce((a, b) => a + b, 0);
}