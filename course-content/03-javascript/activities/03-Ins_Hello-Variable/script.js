// Declares student variable. If the value of the variable will change, use the let keyword.
let studentName;

// Uses assignment operator(=) to assign a value
let studentAge = 32;

// Alternatively, if the value of the variable will not change, use the const keyword.
const teacherName = "Farley";

// To re-assign a variable, use only the variable's name
studentName = 'Asher';
studentAge = 6;

console.log(studentName);

studentName = 'Sage';

// Variables created with the const keyword cannot be reassigned. Uncomment the following line to see the error:
// teacherName = 'Melanie';

// To access a value stored in a variable, use the variable's name
console.log(studentName);

// To combine the message with a variable value use the template literal syntax
// Logs 'My name is '
console.log('My name is ');

// Logs 'My name is Tonya'
console.log(`My name is ${studentName}`);
console.log(`My teacher's name is ${teacherName}`);

console.log("My name is " + studentName + ". My age is " + age);//Uncaught ReferenceError: age is not defined

// Traditionally, the var keyword was used to create variables, but modern javaScript has replaced it with let/const
var teacherAge = 48;
