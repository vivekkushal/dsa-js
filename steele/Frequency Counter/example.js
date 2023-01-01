// Write a function called 'same', which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of the values must be same, order is not important

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
}

console.log(same([1, 2, 5], [4, 1, 25]));
