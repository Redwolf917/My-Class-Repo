const tipEl = document.querySelector('#tip-percentage');
const totalEl = document.querySelector('#total');
const submitEl = document.querySelector('#submit');
const formEl = document.querySelector("#form");

function calculateTip(total, tipPercentage) {
  const roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

//Inside the addTip function, we add event.preventDefault() to the top of the code block. This will stop the browser from clearing the information in the text fields by default.
function addTip(event) {
  console.log(event);
  // Prevent default action
  event.preventDefault();
  // Store tip and total calculations in variables

  const tipPercentage = tipEl.value * 0.01;
  const total = totalEl.value;
  const tipAmount = calculateTip(total, tipPercentage);
  const newTotal = calculateTotal(tipAmount, total);
  // Update HTML with tip and total
  document.querySelector('#tip-amount').textContent = tipAmount;
  // Use toFixed() to limit to two decimal places
  document.querySelector('#new-total').textContent = newTotal.toFixed(2);
}

// Add listener to submit element
//To fix this, we add a line of code to the action that we want to have performed when we click. In this case, the addEventListener() sets up the addTip function to be executed when the button is clicked
submitEl.addEventListener("click", addTip);

// submitEl.addEventListener("click", function(e){

//   addTip(e, "meow", "bark");
// });

formEl.addEventListener("submit", addTip); // listens for the whole form
//event.preventDefault(); needed for both click and submit 

