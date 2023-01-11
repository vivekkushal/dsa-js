// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, 'areThereDuplicates' which accepts a 'variable number of arguments', and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)
// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...args) {
  if (arguments.length < 2) {
    return false;
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
