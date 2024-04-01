#! /usr/bin/env node
import inquirer from "inquirer";
// 01. Computer will generate a random number. - Done
// 02. User input for guessing a number - Done
// 03. Compare user input with computer generated number - Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed a right number.");
}
else {
    console.log("You guessed a wrong number, The correct number is:", randomNumber);
}
