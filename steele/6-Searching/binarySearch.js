// Binary Search Pseudocode: - TC: O(log n)
//     👉🏻 This function accepts a sorted array and a value
//     👉🏻 Create a left pointer at the start of the array, and a right pointer at the end of the array
//     👉🏻 While the left pointer comes before the right pointer:
//         👉🏻 Create a pointer in the middle
//         👉🏻 If you find the value you want, return the index
//         👉🏻 If the value is too small, move the left pointer up
//         👉🏻 If the value is too large, move the right pointer down
//     👉🏻 If you never find the value, return -1

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] > val) {
      end = middle - 1;
    } else if (arr[middle] < val) {
      start = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
