// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = function (arr) {
  let largest = null;
  let secondLargest = null;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};
