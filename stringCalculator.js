export default function add(numbers) {
  if (numbers === "") return 0;
  // if single number
  if (!numbers.includes(',' ) && !numbers.includes('\n')) {
    return Number(numbers);
  }
  throw new Error('Not implemented');
}