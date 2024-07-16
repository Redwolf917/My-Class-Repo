const input = parseFloat(process.argv[2]);
const value = parseFloat(process.argv[3]);
let sum = 0;

if (input != null && value != null) {
  for (let i = 0; i < input; i++) {
    if (i % value == 0) sum = sum + i;
  }
  console.log("Result : " + sum);
}
if (input == null && value == null) {
  console.log("Please enter two numbers");
}
