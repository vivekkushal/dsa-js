// ------------------------------------ Frequency Counter ---------------------

// 0.) Always check whether length of an Array, String or Object can be a condition check for immediate answer

// 1.) Insert 'val' as a key in 'frequencyCounter' if 'val' is not present and give a value of 1, but if 'val' is present already then simply increment by 1
let frequencyCounter = {}; // frequencyCounter is an object
frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
// Alternate: frequencyCounter[val] = ++frequencyCounter[val] || 1; // 'skip when true' short circuiting
// Alternate: frequencyCounter[val] ? frequencyCounter[val] += 1 : frequencyCounter[val] = 1

// 2.) 'in' operator checks whether a 'key' is present in an Object or not

// 3.) Anagram checking is a nice example of 'frequencyCounter' pattern

// 4.) Strings behave differentely than numbers. If we want to check whether a given string is an anagram to another string then we just need to remove letters (which are keys) from the frequency counter one by one. This will serve as a mechanism to check anagram because if all letters are removed successfully from the frequencyCounter then the two strings were definitely anagrams if their lengths were same in the beginning

// ------------------------------------ Multiple Pointers ---------------------

// 0.) Creating 'pointers' or values that correspond to an index or position and move towards the beginning, middle or end based on a certain condition. 'Very' efficient for solving problems with minimal space complexity as well.

// 1.) Usually helpful in sorted arrays

// Two pointers
let left = 0;
let right = arr.length - 1;

// ------------------------------------ Sliding Window ------------------------

// 0.) This pattern involves creating a 'window' which can either be an array or number from one position to another. Depending on certain condition, the window either expands or closes (and a new window is created). Very useful for keeping track of a subset of data in an array / string etc.

// 1.) Usually helpful in subset (subarray / substring) types of problems when we are given an array or a string

// let max = -Infinity; // In JS, -Infinity will give the smallest integer
let max = 0; // We will update this variable through comparision with 'temp'
let temp = 0; // We will update this variable through iteration
let startPos; // Starting position of the sliding window
let endPos; // Ending position of the sliding window

// ------------------------------------ Divide and Conquer --------------------

// 0.) This pattern involves dividing a data set into smaller chunks and then repeating the process with a subset of data. This pattern can tremendously 'decrease time complexity'.

// 1.) Usually helpful in sorted data structures like (arrays, linked lists etc.)
let Min = 0;
let Max = arr.length - 1;
let middle = Math.floor((Max + Min) / 2);

// ------------------------------------ Recursion --------------------

// 0.) The Call Stack - This is a very important video

// 1.) It's a 'Stack' data structure. Any time a function is invoked it is 'pushed' on top of the call stack. When JavaScript sees the 'return' keyword or when the function ends, the compiler will 'pop' it.
