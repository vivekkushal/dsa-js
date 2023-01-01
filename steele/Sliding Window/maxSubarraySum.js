// Write a function called maxSubarraySum which accepts an array of integers and a number called 'n'. The fucntion should calculate the maximum sum of 'n' consecutive elements in the array.

// Näive solution - TC: O(n^2), SC: O(1)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = i; j < i + num; j++) {
      temp += arr[j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Sliding window approach - TC: O(n), SC: O(1?)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = 0;
  let temp = 0;
  let startPos;
  let endPos;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;

  // sliding window
  for (let i = 1; i < arr.length; i++) {
    temp = temp - arr[i - 1] + arr[i + num - 1];
    if (temp > max) {
      max = temp;
      // Optional
      // startPos = i + 1;
      // endPos = i + num;
    }
  }
  return max; // return [startPos, endPos, max];
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
// 10
