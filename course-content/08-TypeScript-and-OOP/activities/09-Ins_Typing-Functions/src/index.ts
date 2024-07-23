// Regular Functions
// Function Declaration
function declareHello() {
  console.log('Hello, I am a function declaration.');
  console.log('-----------------------------------');
  // Return stops the execution of a function
  return;
}

// Function Expression
const expressHello = function () {
  console.log('Hello, I am a function expression.');
  console.log('-----------------------------------');
  return;
};

// Function must be called to execute
declareHello();
expressHello();

// ES6 Arrow Functions
const deliverMessage = (message) => message;

deliverMessage('Safe Travels!');

// Typed Functions

// The parameters and return value types are defined
const whatCarDoYouDrive = (model: string): void =>
  console.log(`I drive a ${model}.`);

whatCarDoYouDrive('Honda Element');

// Same applies with multiple parameters
const subtract = (num1: number, num2: number): number => num1 - num2;

const difference = subtract(42, 33);

console.log(difference);

// The function can return a different type than the parameters
const packingForATrip = (
  item1: string,
  item2: string,
  item3: string
): string[] => {
  const suitcase = [];

  suitcase.push(item1);
  suitcase.push(item2);
  suitcase.push(item3);

  return suitcase;
};

const luggage: string[] = packingForATrip('clothes', 'phone', 'toothbrush');

console.log(luggage);
