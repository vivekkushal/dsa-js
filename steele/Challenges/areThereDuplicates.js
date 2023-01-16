// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, 'areThereDuplicates' which accepts a 'variable number of arguments', and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)
// Bonus:
// Time - O(n log n)
// Space - O(1)

// Frequency Counter method
function areThereDuplicates(...args) {
  if (args.length < 1) {
    return undefined;
  }
  let fc = {};

  for (let element of args) {
    fc[element] = (fc[element] || 0) + 1;
    if (fc[element] === 2) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c"));
// false

// Multiple Pointer method - works when all arguments are either Number or all are String
function areThereDuplicatesMP(...args) {
  if (args.length < 1) {
    return undefined;
  }

  // Two pointers
  let left = 0;
  let right = 1;

  // Sorting is necessary for multiple pointers
  typeof args[left] === Number ? args.sort((a, b) => a - b) : args.sort();

  while (right < args.length) {
    if (args[left] === args[right]) {
      return true;
    }
    right++;
    left++;
  }
  return false;
}

console.log(areThereDuplicatesMP("a", "a", "d", "c"));
// true
