//We use querySelector() to select the DOM elements and assign them to variables
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const msgDiv = document.querySelector('#msg');
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');



function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}


//In the renderLastRegistered() function, we query localStorage using the getItem() method for both email and password strings
function renderLastRegistered() {
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
//If either email or password is null, we exit the function with return. Otherwise, we render the values using the textContent property in the userEmailSpan and userPasswordSpan elements
  if (!email || !password) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

//We use addEventListener() on the signUpButton and listen for a click event. We prevent the browser's default action using event.preventDefault()
signUpButton.addEventListener('click', function (event) {
  event.preventDefault();


//We use querySelector() and the value property to assign the values in the form fields to email and password variables
  const email = emailInput.value;
  const password = passwordInput.value;

  //We store the values in localStorage using the setItem() method and call the renderLastRegistered() method. If the email or password strings are empty, we display an error message. Otherwise, we display a message indicating that the registration is successful.
  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    // userEmailSpan.textContent = email;
    // userPasswordSpan.textContent = password;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    renderLastRegistered();
  }
});


renderLastRegistered();