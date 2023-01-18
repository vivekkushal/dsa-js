// Multiple Pointers - isSubsequence
// Write a function called 'isSubsequence' which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, 'without their order changing'.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  // Two pointers
  let first = 0;
  let second = 0;

  while (second < str2.length) {
    if (str1[first] === str2[second]) first++;
    if (first === str1.length) return true;
    second++;
  }
  return false;
}

console.log(isSubsequence("abc", "abracadabra"));
// true
