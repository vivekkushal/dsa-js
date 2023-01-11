// Frequency Counter - sameFrequency
// Write a function called 'sameFrequency'. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

function sameFrequency(num1, num2) {
  let fc = {};

  while (num1 > 0) {
    let digit = num1 % 10;
    fc[digit] = (fc[digit] || 0) + 1;
    num1 = Math.floor(num1 / 10);
  }

  while (num2 > 0) {
    let digit = num2 % 10;
    if (digit in fc && fc[digit] > 0) {
      fc[digit] -= 1;
    } else {
      return false;
    }
    num2 = Math.floor(num2 / 10);
  }

  for (let key in fc) {
    if (fc[key] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(2223, 222));
// false
