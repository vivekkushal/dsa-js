// Write a function called 'same', which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values must be same, order is not important.

// Naive approach - O(n^2)
function sameNaive(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1); // we are removing elements from the array so that we don't need to store what elements we don't need to check those elements in the next iteration of the loop - this can be used as a strategy to reduce 'space complexity'
  }
  return true;
}

console.log(sameNaive([1, 2, 5], [4, 1, 25]));
// true

// Frequency counter approach - O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 6, 3], [36, 1, 9]));
// true
