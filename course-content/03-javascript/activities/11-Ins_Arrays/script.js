// So far, we have been storing one piece of data in variables
const name = 'Andre';
const pets = 3;
const isStudent = true;

// To store groups of data in a single variable, we use arrays
const names = ["Farley", "Asher", "Sage", "Beelzebub"];

// The entire array can be accessed by using the array's name
console.log(names);

// To log a single element, we use the name of the array with the index in brackets
console.log(names[1]);

// Arrays are zero-indexed, so the index of first element in the array is 0
console.log(names[0]);

// We can also use index to replace data in an array
// Returns 'Olivia'
console.log(names[3]);

//Replaces 'Olivia' with 'Carter'
names[3] = "Faye"; 

// Logs 'The fourth name is Carter.'
console.log(`The fourth name is ${names[3]}.`);

// We use the array's length property to determine how many elements are in the array
console.log(`The length of the array is ${names.length}.`);

// namesArr[4] = "Bob";
// namesArr[namesArr.length] = "Bob";
names.push("Bob");
console.log(names);//['Farley', 'Asher', 'Sage', 'Faye', 'Bob']

console.log(names[4]);//Bob
console.log(names.length);//5

names[0] = "Wittles";
console.log(names);//['Wittles', 'Asher', 'Sage', 'Faye', 'Bob']

if(names[0] === "Wittles"){
	console.log("Message");
}


var temp = names[0];//'Wittles'

names[0] = names[2];//['Sage', 'Asher', 'Sage', 'Faye', 'Bob']

names[2] = temp;//['Sage', 'Asher', 'Wittles', 'Faye', 'Bob']

console.log(names);//['Sage', 'Asher', 'Wittles', 'Faye']

names[9] = "Mr. Snuggels";


// ['Sage', 'Asher', 'Wittles','Faye', undefined, undefined, undefined, undefined,"Mr. Snuggels" ]

// names.push("Mr. Snuggels");
// ['Sage', 'Asher', 'Wittles', 'Faye',"Mr. Snuggels" ]

console.log(names[8]);//undefined

console.log(names)//['Sage', 'Asher', 'Wittles', 'Faye', 'Bob', undefined, undefined, undefined, undefined, 'Mr. Snuggels']
console.log(names.length)//10