let wins = 0;
let ties = 0;
let losses = 0;

// Array of options for computer to pick from
const options = ["R", "P", "S"];

let playGame = function() {
  // Ask user for their choice
  let userChoice = promptUser();

  let computerChoice = generateComputerChoice();
  alertComputerChoice(computerChoice);
  checkUserComputerChoiceCondition(userChoice ,computerChoice);
  // alertStats();
  // playAgain(); 
};

function promptUser(){
  let userChoice = window.prompt("Enter R, P, or S:");
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();
  if(userChoice !== "R" || userChoice !== "P" || userChoice !== "S"){
    promptUser();
  }
  return userChoice;
}

function generateComputerChoice(){
  // Get random index from array of options
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];
  return computerChoice;
}

function alertComputerChoice(randomComputerChoice){
  window.alert("The computer chose " + randomComputerChoice);
}

function checkUserComputerChoiceCondition(userChoice ,computerChoice){
  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }
  alertStats();
  playAgain();
}

function alertStats(){
  // Print stats with line breaks
  window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
}

function playAgain(){
  // Ask user to play again
  let playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
}

// Run the game for the first time
playGame();



