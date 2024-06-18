// We use a `for` loop to execute code more than once
for (let i = 0; i < 5; i++) {
  // This is the block of code that will run each time
  console.log(`This is the current value of i: ${i}.`);
}

// `for` loops are often used to iterate over arrays
const zooAnimals = ['Bears', 'Giraffes', 'Penguins', 'Meerkats'];

console.log('I am going to the zoo to visit:');

// To determine how many times the loop should execute, we use the array's length
for (let i = 0; i < zooAnimals.length; i++) {
  console.log(`${i + 1}) ${zooAnimals[i]}`);
}

console.log('I am going to the zoo to visit:');


for (let i = 0; i < 3; i++) { 
  console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

console.log("****");

for (let i = 0; i < zooAnimals.length; i++) {
  console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

for (let i = 0; i < zooAnimals.length; i = i + 1) {
  console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

// console.log[0];//"Bears"
// console.log[1];//"Giraffes"
// console.log[2];//"Penguins"
// console.log[3];//"Meerkats"
// console.log[4];//undefined

console.log("****");

for (let i = zooAnimals.length -1 ; i >= 0; i--) { 
  console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}




// if we don't need the index we can also use a for-of loop
for (const animal of zooAnimals) {
  console.log(animal);
}
