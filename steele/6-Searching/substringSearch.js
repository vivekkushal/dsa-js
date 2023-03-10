// Substring Search
//     ๐๐ป Suppose you want to the number of times a smaller string appears in a longer string
//     ๐๐ป A straightforward approach involves checking pairs of characters individually

// Nรคive Substring Search Pseudocode: - TC: O(n^2), SC: O(1)
//     ๐๐ป Loop over the longer string
//     ๐๐ป Loop over the shorter string
//     ๐๐ป If the characters don't match, break out of the inner loop
//     ๐๐ป If the characters do match, keep going
//     ๐๐ป If you complete the inner loop and find a match, increment the count of matches
//     ๐๐ป Return the count

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
