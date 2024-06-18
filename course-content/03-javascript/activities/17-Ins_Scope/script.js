// A variable declared in global scope is available to all functions
//We have been declaring variables outside of the functions. 
//Variables declared outside of a function, like in the following example, are globally scoped:
let hello = "Hello"; 

//A variable in the global scope can be used throughout your code in any function or script. 
//Both of the following functions have access to the value stored in the variable hello:
function sayHello() {
  console.log(hello);
  return;
}

const sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
//Declaring a variable inside a function changes the scope of the variable. 
//The variable can only be accessed inside that function. 
//This is called local scope:
function sayGoodbye() { 
  let goodbye = "Goodbye";
  console.log(goodbye);
  return;
}
sayGoodbye();
// console.log(goodbye);//Uncaught ReferenceError: goodbye is not defined

//This will throw an error
//If we try to use a locally scoped variable in another function, like in the following example, we will get an error:
const sayGoodbyeAgain = function () { 
  console.log(goodbye);//Uncaught ReferenceError: goodbye is not defined
  return;
};
sayGoodbye()
// sayGoodbyeAgain();//Uncaught ReferenceError: goodbye is not defined

// Shadowing happens when we use the same variable name in both the local and global scope, 
//as shown in the following example
let shadow = "Hello";
 console.log(shadow);//"Hello"


// Logs "Hello"
function sayWhat(shadow) {
  console.log(shadow);//"Meow"
  return;

}
sayWhat("Meow");


//Logs "Goodbye"
const sayWhatAgain = function () {
  console.log("Here: " + shadow);// "Here: Hello"
  shadow = "Goodbye";
  console.log(shadow);//"Goodbye" 
};

// sayWhatAgain();

console.log(shadow);//"Hello";

sayWhatAgain();

console.log(shadow);//"Goodbye";

//We should avoid shadowing by giving the local and global variables unique names. 
//Keeping the scope clean and organized makes it easier to develop and work in the codebase.

const sayWhatAgainParams = function (shadow) {
  console.log(shadow);   
};

sayGoodbye();//"Goodbye"
sayWhat();//undefined - no argumment passed
sayWhatAgain();
sayWhatAgainParams("Meow");



//===================================


    let name = "Farley";
    let age = 92;
    let languages = ["English", "Norwegian", "Spanish"];

    function firstFunction(message) {
      console.log(message + name + " is " + age + ".");
    }

    // "Oh, my! Farley is 92."
    firstFunction("Oh my! ");
    console.log(age);//92

    // console.log(message); //undefined

    // age = 42;
    function secondFunction(name) {
      // var age = 42;
      console.log(age);//undefined
      var age = 42;
      console.log(name + " is " + age + ".");
    }

  

    // "Oh, my! Farley is 92."
    firstFunction("Oh my! ");

    console.log(age);//92

    // "Julius is 42."
    secondFunction("Julius");

    console.log(age);//42

    // "Oh, my! Farley is 42."
    firstFunction("Oh my! ");


    // Write a function that returns: name + " is " + age + ".",
    // It should use the value of name defined above, but
    // shadow the age value.
    function thirdFunction(age) {
      // age = 3;
      console.log(name + " is " + age + ".");
      return name + " is " + age + ".";
    }

    // Log the return value of thirdFunction.
    // BONUS: Do this without a variable assignment.

    let statement = thirdFunction(100);
    console.log(statement);//"Farley is 100."


    // console.log(thirdFunction(100));

  

