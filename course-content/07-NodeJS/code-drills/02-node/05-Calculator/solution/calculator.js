console.log(process.argv);
const first = process.argv[2];
const second = process.argv[3];
const third = process.argv[4];
let result;

if (first === "add") {
  result = parseFloat(second) + parseFloat(third);
  console.log(result);
} else if (first === "subtract") {
  result = parseFloat(second) - parseFloat(third);
  console.log(result);
} else if (first === "multiply") {
  result = parseFloat(second) * parseFloat(third);
  console.log(result);
} else if (first === "divide") {
  result = parseFloat(second) / parseFloat(third);
  console.log(result);
} else if (first === "remainder") {
  result = parseFloat(second) % parseFloat(third);
  console.log(result);
} else {
  result = "Not an appropriate operation";
  console.log(result);
}

// console.log(result);
