const typefaceEl = document.querySelector('#typeface');
const clearEl = document.querySelector('#clear');
const h1El = document.querySelector('#h1');
const h2El = document.querySelector('#h2');
const h3El = document.querySelector('#h3');
const pEl = document.querySelector('#p');
const textAreaEl = document.querySelector('#textarea');

const elements = [h1El, h2El, h3El, pEl];

let typeface;

// Change event
//We attach a change event to the <select> element using addEventListener(). When the user selects a value from the dropdown, the function will execute. Note that the first parameter is the event, so we use change
typefaceEl.addEventListener('change', function (event) {

  // event.preventDefault();//we do not need this
  typeface = typefaceEl.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event
//We also attach a keyboard event to the <textarea> element using addEventListener(). A keydown event is fired when a key is pressed down
textAreaEl.addEventListener('keydown', function (event) {

  console.log(event);
  // Access value of pressed key with key property
  //Keyboard events have two commonly used properties. The key property returns the value of the key pressed. The code property returns the key's code. We use event.key to access the value of the pressed key

  // Access value of pressed key with key property
  const key = event.key.toLowerCase();
  const alphabetNumericCharacters =
    'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
  if (alphabetNumericCharacters.includes(key)) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
    // elements.forEach(function(element) {
    //   //We use the textContent property to set the content of an element to the pressed key's value
    //   element.textContent += event.key;
    //   // element.textContent = element.textContent + event.key;
    // });
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});
