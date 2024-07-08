// Write code to create a function that returns the factorial of `num`

const factorial = function(num) {
  let result = 1;

  for (let i = num; i > 1; i--) {
    result = result * i;
  }

  return result;
};
