import inquirer from "inquirer";

// 01. Computer will generate a random number. - Done
// 02. User input for guessing a number
// 03. Compare user input with computer generated number
const randomNumber = Math.floor(Math.random());
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number: ",
  },
]);

if(answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number.")
} else {
    console.log("You guessed a wrong number")
}