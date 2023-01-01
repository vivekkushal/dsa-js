// console.log("Hello world!");

function counter(array) {
  let counterVal = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      counterVal++;
    }
  }

  return counterVal;
}

let val = counter([-1, 1, 1, 1, 1, 2]);

console.log(val);
