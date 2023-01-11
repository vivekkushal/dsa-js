// Let us try to collect all of the odd values in an array!

// Helper Method Recursion
function collectOddValuesHMR(arr) {
  let result = [];

  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) {
      return;
    }

    // recursive logic
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // recursive call
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValuesHMR([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// [1, 3, 5, 7, 9]

// Pure Recursion
function collectOddValuesPR(arr) {
  let newArr = []; // this will be initialized everytime

  // base case
  if (arr.length === 0) {
    return newArr;
  }

  // recursive logic
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // recursive call
  newArr = newArr.concat(collectOddValuesPR(arr.slice(1)));

  return newArr;
}

console.log(collectOddValuesPR([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// [1, 3, 5, 7, 9]
