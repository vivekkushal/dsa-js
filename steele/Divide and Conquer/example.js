// Given a 'sorted' array of intergers, write a function called search, that excepts an array, a value and returns the index where the value passed to the function is located in that array. If the value is not found, return -1

// Näive solution - TC: O(n), SC: O(1)
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 5));
// 4

// Divide and Conquer approach - TC: O(log n), SC: O(1)
function betterSearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);

    if (arr[middle] > num) {
      max = middle - 1;
    } else if (arr[middle] < num) {
      min = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(betterSearch([1, 2, 3, 4, 5, 6], 11));
// -1
