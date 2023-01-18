// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called 'maxSubarraySum', which finds the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }
  let start = 0;
  let end = num;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  let maxSum = sum;
  while (end < arr.length) {
    sum = sum - arr[start] + arr[end];
    if (maxSum < sum) {
      maxSum = sum;
    }
    start++;
    end++;
  }
  return maxSum;
}

console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
// 5
