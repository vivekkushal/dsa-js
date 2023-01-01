// Requires 3 loops and 2 objects
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

// Requires only 2 loops and 1 object
function betterAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter = {};

  for (let i = 0; i < str1.length; i++) {
    frequencyCounter[str1[i]] = (frequencyCounter[str1[i]] || 0) + 1;
    // frequencyCounter[str2[i]] = (frequencyCounter[str2[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!frequencyCounter[str2[i]]) {
      return false;
    } else {
      frequencyCounter[str2[i]] -= 1;
    }
  }
  return true;
}

betterAnagram("cinema", "iceman");
// true
