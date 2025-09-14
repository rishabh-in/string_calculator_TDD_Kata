export default function add(numbers) {
  if (numbers === "") return 0;

  // if single number
  if (!numbers.includes(',') && !numbers.includes('\n')) {
    return Number(numbers);
  }

  // handle comma-separated numbers
  const nums = numbers.split(',').map(n => Number(n));
  return nums.reduce((a, b) => a + b, 0);
}