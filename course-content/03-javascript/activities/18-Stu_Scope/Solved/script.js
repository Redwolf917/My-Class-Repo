// Shout is declared in the global scope and is available to both functions 
//We declare the variable shout in the global scope so that it is available to all functions, 
//including justShout and shoutItAllOut, as shown in the following example:
const shout = 'Shout';

const justShout = function () {
  console.log(`${shout}, ${shout}`);
  return;
};

const shoutItAllOut = function () {
  console.log(`${shout} it all out! `);
  return;
};

justShout();
shoutItAllOut();

// Lions is declared locally so it is available only to the sayLions function
//In the following example, the variable animals has been declared locally 
//inside the sayLions function, so it is only available in that function:
const sayLions = function () {
  const animal = 'Lions';
  console.log(animal);
  return;
};
// console.log(animal);
 
// Tigers is declared locally so it only available to the sayTigers function 
//We declare the variable animals locally inside the sayTigers function. Since a locally 
//scoped variable is only accessed in the function where it is declared, 
//it doesn't change the value of the animal variable declared in sayLions. 
//In the following example, the sayLions function will use the value Lions, and the sayTigers function will use the value Tigers:
const sayTigers = function () {
  const animal = 'Tigers';
  console.log(`and ${animal} and `);
  return;
};

// Variables of the same name should not be declared in global and local scope
// Kept global scope
//To avoid shadowing, or declaring a variable with the same name in the global and local scope, 
//we remove the bears variable in the local scope so that the sayBears function will log "Bears! OH MY!", as follows:
const bears = 'Bears';
 
// Removed local scope
const sayBears = function () {
  console.log(`${bears}! OH  MY!`);
  return;
};

sayLions();
sayTigers();
sayBears();
 
// Declaring sing in the outer function makes it available to the inner and outer function
//We declare the variable sing inside the outer function so that the value of sing is 
//available to everything inside the outer function, including the inner function. 
//Shown in the following example, this is called a nested function:
const singAlong = function () {
  const sing = 'Sing';
  console.log(`${sing},`);
  const singASong = function () {
    console.log(`${sing} a Song.`);
  };
  singASong();
};

singAlong();
