export default function analyzeArray(arr) {
  const average = arr.reduce((sum, n) => sum + n, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length
  };
}
