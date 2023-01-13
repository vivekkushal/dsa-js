// Linear Search Pseudocode: - TC: O(n)
//     👉🏻 This function accepts an array and a value
//     👉🏻 Loop through the array and check if the current array element is equal to the value
//     👉🏻 If it is, return the index at which the element is found
//     👉🏻 If the value is never found, return -1

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 5, -14, 45, 18, 2], 18));
// 4
