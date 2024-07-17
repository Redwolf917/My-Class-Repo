// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object

const person = {
  name: 'Hodor',
  saySomething: function () {
    console.log(`${this.name} is thinking...`);//Hodor is thinking...
    setTimeout(function () {
      console.log(`${this.name}!`);//undefined!!
    }, 100);
  },
};

person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

// Arrow functions bind the `this` keyword to the object it's created inside of person, 
// i.e. whatever `this` is where it's created
// even if it is not a direct property of that object.
const person2 = {
  name: 'Hodor',
  saySomething: function () {
    console.log(`${this.name} is thinking...`);//Hodor is thinking...
    setTimeout(() => console.log(`${this.name}!`), 100);//Hodor!!!!, [Function: saySomething]
  },
};

person2.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later


// this in NodeJS global scope is the current module.exports object, not the global object.
// console.log(this);    // logs {}

module.exports.context = "global";
console.log(this);
// {context : "global"}

const obj = {
    context: "obj",
    arrowFn: () => console.log("Global.context: ", this.context),
 
    //With arrow functions the this keyword always represents the object that defined the arrow function.
    anonFn: function() { console.log("Obj.context: ", this.context) },
};

obj.arrowFn(); // prints global
obj.anonFn(); // prints obj