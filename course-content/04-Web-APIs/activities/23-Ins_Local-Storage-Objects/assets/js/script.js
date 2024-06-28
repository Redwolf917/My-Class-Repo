const student = document.getElementById('student-names');
const grade = document.getElementById('grades');
const comment = document.getElementById('msg');
const saveButton = document.getElementById('save');

saveButton.addEventListener('click', function (event) {
  event.preventDefault();

  //When the button is clicked, we store the current values together as an object
  const studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim(),
  };

	//We cannot store an object directly using localStorage. So we use the JSON.stringify() method to convert the object into a string
	//The string can then be stored as a key-value pair in local storage using the setItem() method
	
	//Objects Setting
  localStorage.setItem("studentGradeStringify", JSON.stringify(studentGrade));
  localStorage.setItem("studentGrade", studentGrade);

  //Array Setting
  localStorage.setItem("ArrayStringify", JSON.stringify(["studentGrade", 1,2 ]));
  localStorage.setItem("Array", ["studentGrade", 1,2 ]);

  renderMessage();
});

//Inside the renderMessage function, we retrieve the string and convert it back into an object with JSON.parse(). 
//If lastGrade is not null, we display a message for the user.
function renderMessage() {
  //Object Getting
  const lastGrade = JSON.parse(localStorage.getItem("studentGradeStringify"));
  // const lastGrade = localStorage.getItem("studentGrade");
  
  //Array Getting
  const arr = JSON.parse(localStorage.getItem("ArrayStringify"));
  console.log("localStorage.getItem('ArrayStringify'", arr[0])//"studentGrade" Beacause ["studentGrade", 1,2 ]

  const arrStr = localStorage.getItem("Array");
  console.log("localStorage.getItem('Array');", arrStr);
  // arrStr = "studentGrade,1,2"
  
  console.log("arrStr[0]", arrStr[0])//s Beacuse "studentGrade,1,2"

  if (lastGrade !== null) {
    document.querySelector('.message').textContent =
      lastGrade.student + ` received a/an ${lastGrade.grade}`;
  }
}
