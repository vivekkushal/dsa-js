// Implement a function called countUniqueValues() which accept a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Without multiple pointers - TC: O(n), SC: O(1)
// We have lost the information about what those unique values are in this method, we only count the number of unique values
function countUniqueValues(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      counter++;
    }
  }
  return counter;
}

// With multiple pointers - TC: O(n), SC: O(n)
// We still have the information about what those unique values are in this method
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}

countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]);
// 7
