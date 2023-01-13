// Substring Search
//     👉🏻 Suppose you want to the number of times a smaller string appears in a longer string
//     👉🏻 A straightforward approach involves checking pairs of characters individually

// Näive Substring Search Pseudocode: - TC: O(n^2), SC: O(1)
//     👉🏻 Loop over the longer string
//     👉🏻 Loop over the shorter string
//     👉🏻 If the characters don't match, break out of the inner loop
//     👉🏻 If the characters do match, keep going
//     👉🏻 If you complete the inner loop and find a match, increment the count of matches
//     👉🏻 Return the count

function substringSearch(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length - str2.length + 1; i++) {
    if (str1[i] === str2[0]) {
      let check = true;
      for (let j = 0; j < str2.length; j++) {
        if (str2[j] !== str1[i + j]) {
          check = false;
          break;
        }
      }
      if (check) {
        count++;
      }
    }
  }
  return count;
}

console.log(substringSearch("wowomgzomg", "omg"));
// 2
