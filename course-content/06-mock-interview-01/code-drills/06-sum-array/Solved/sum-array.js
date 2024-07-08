// Write code to add all the numbers in `arr` and return the total

const sumArray = function(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    result += currentNumber;
  }

  return result;
};
