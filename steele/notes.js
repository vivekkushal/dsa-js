// console.log("Hello world!");

// function counter(array) {
//   let counterVal = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== array[i - 1]) {
//       counterVal++;
//     }
//   }

//   return counterVal;
// }

// let val = counter([-1, 1, 1, 1, 1, 2]);

// console.log(val);

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
