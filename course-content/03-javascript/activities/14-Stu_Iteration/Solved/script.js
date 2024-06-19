// Creates an array containing names of five student in the class
const students = ['Sarah', 'Orlando', 'Heather', 'Ismael', 'Hung'];

// Logs the length of the array
console.log(students.length);

console.log('-----------------------------------');
console.log('For loop');

// `for` loop starts at 0, runs while i is less than length of student array
// Increments by 1
for (let i = 0; i < students.length; i++) {
  // This statement will run each time the loop is executed
  console.log(`Great to see you, ${students[i]}!`);
}


// Logs length of the array
console.log(students.length);

for(let i = 0; i < 4; i++) {console.log("Great to see you, " + students[i] + "!"); }

for(let farley = 0; farley < 4; farley++) {
  console.log("Great to see you, " + students[farley] + "!"); 
}

for(let bark = 0; bark < 4; bark++) {
  console.log("meow"); 
}

console.log("==========");

for(let i = 0; i < 4; i++) {
  // This statement will run each time the loop is executed
  console.log("Great to see you, " + students[i] + "!");
}

console.log("==========");

// For loop starts at 0, runs while i is less than length of student array
// Increments by 1
for(let i = 0; i < students.length; i++) {
  // This statement will run each time the loop is executed
  console.log("Great to see you, " + students[i] + "!");
}

console.log("==========");

for(let i = students.length; i >= 0; i--) {
  // This statement will run each time the loop is executed
  console.log("Great to see you, " + students[i] + "!");
}


console.log("==========");


// While Loop: Loops can execute a block of code as long as a specified condition is true.
let i = 0;
while (i < students.length) {
console.log("Good to see you, " + students[i] + "!");
i++;
}

console.log("==========");

// The do...while statement creates a loop that executes a specified statement 
// until the test condition evaluates to false. 
// The condition is evaluated after executing the statement, 
// resulting in the specified statement executing at least once.
let j = 0;
do {
console.log("Good to see you, " + students[i] + "!");
j = j + 1;
// j++
} while (j < students.length);


console.log("==========");

let foundStuent = false;
let k = 0;
while(!foundStuent && k < students.length ){
if(students[k] === "Heather"){
  foundStuent = true;
  console.log("Found " + students[k])
}
if(k >= students.length -1 && !foundStuent){
  console.log("student Not Found");
  
}else if (!foundStuent){
  console.log("Current Student: " + students[k])
  k++;
}

}

console.log('-----------------------------------');
console.log('For-of loop');

// `for-of` loop executes once for each item in the array
for (const student of students) {
  // This statement will run each time the loop is executed
  console.log(`Great to see you, ${student}!`);
}
