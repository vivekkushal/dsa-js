// Sliding Window - minSubArrayLen
// Write a function called 'minSubArrayLen' which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a 'contiguous' subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Constraints:
// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubarrayLen(arr, num) {
  let first = 0;
  let second;
  let sum = 0;
  let result = 0;

  for (second = 0; second < arr.length; second++) {
    sum += arr[second];
    if (sum >= num) {
      result = second - first + 1;
      break;
    }
  }
  while (sum >= num || second < arr.length) {
    sum -= arr[first];
    first++;
    if (sum >= num && result > second - first + 1) {
      result = second - first + 1;
    }
    if (sum < num && second < arr.length) {
      second++;
      sum += arr[second];
    }
  }
  return result;
}

console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// 5
