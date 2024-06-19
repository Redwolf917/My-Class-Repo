
// function isEqual() {
//   console.log('They are equal in type and value');
// }

// isEqual();


// isEqual using function declaration
let str1 = "cat";
let str2 = "dog";

function isEqual(val1, val2) {
  if (val1 === val2) {
    console.log('They are equal in type and value');
  } else if (val1 == val2) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }

}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Logs "They are equal in value"
isEqual('10', 10);

isEqual(str1, str2);
isEqual("cat", "dog");


// Using function expression
const isEqualTakeTwo = function (x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
};

// Logs "They are not equal"
isEqualTakeTwo(10, true);


//=========================


let score = 0;


// score = score + 1;
// score = score + 1;
// score = score + 1;



function incrementScore(){
  score = score + 1;
  return score;
}

incrementScore();
incrementScore();
incrementScore();

console.log(score)//3


let newScore = incrementScore();
console.log(newScore);//4



function setOfWork(){
  //do something
  console.log("Hello"); 
}

setOfWork();
setOfWork();
setOfWork();
setOfWork();
setOfWork();


function setOfOtherWork(arg){
  //do something different 
  console.log("Hello " + arg);
}


setOfOtherWork("Farley");
setOfOtherWork("Asher");
setOfOtherWork("Sage");

let outPutStr = setOfOtherWork("Mr.Snuggles");
console.log(outPutStr)//undefined 

function setOfOtherWork (arg){
  //do something different 
  // console.log("Hello " + arg);
  return "Hello " + arg
}



let str = setOfOtherWork("Mr. Snuggles");
console.log(setOfOtherWork("Mr. Snuggles"));//undefined no return value
console.log(str);//undefined no return value
