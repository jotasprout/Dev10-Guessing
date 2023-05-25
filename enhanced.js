let maxNumber;

function log_maxNumber(maxNum) {
    console.log(`User said ${maxNum} is the maximum number`);
}

function get_MaxNumber(prompt) {
    let valid_input = false;
    
    while(!valid_input) {
        input = window.prompt(prompt);
    
        maxNumber = Number(input);
    
        if(maxNumber != NaN && maxNumber > 0) {
            valid_input = true;
        }
    }

    //return maxNumber;
    log_maxNumber(maxNumber);
    tellUserMax.innerHTML = `Choose a number between 1 and ${maxNumber}.`;
}

get_MaxNumber("Enter the maximum number.");

let userMaxDisplay = document.getElementById("tellUserMax");

/*

Prompt for Max Number
use the prompt() method to ask the user what the maximum number should be. 

The prompt should be in a loop with validation, as demonstrated previously in the course, making sure that the inputted value is a positive number. If the user inputs a decimal, simply round it.      
  
The application validates the user input and does not allow invalid entries (negative numbers, 0, or non-numbers), re-prompting the user if an invalid entry is provided.

If the guess is not a number, display a message: "That is not a number!"
If the guess is out of range (1 to N), display a message: "That number is not in range, try again."
Grading Criteria
The application prevents the user from guessing a non-number and displays an appropriate error message.
The application prevents the user from guessing a number less than 1 and displays an appropriate error message.
The application prevents the user from guessing a number greater than N and displays an appropriate error message.

When a valid number is inputted, change the content of the instructions to specify guesses between 1 and N (where N is the user-provided maximum number).

The application selects a random number between 1 and N (where N is the user-provided maximum number).

Validate the Guess
When the user presses the guess button, validate the input:

If the user provides a decimal number, the application rounds it.

The application selects a random number between 1 and N (where N is the user-provided maximum number).

If the guess is not a number, display a message: "That is not a number!"

If the guess is out of range (1 to N), display a message: "That number is not in range, try again."

The application prevents the user from guessing a non-number and displays an appropriate error message.
The application prevents the user from guessing a number less than 1 and displays an appropriate error message.
The application prevents the user from guessing a number greater than N and displays an appropriate error message.

3. Track the Guesses
Using an array, keep track of each guess by the user. When the user wins the game by guessing correctly, add the number of guesses and the list of guesses to the victory message. For example:

"You got it! It took you 5 tries and your guesses were 3, 14, 7, 9, 5."

Do not count invalid guesses (not numbers or out of range).

Grading Criteria
The application correctly initializes an array and uses the push() function to add the guesses.
The application correctly formats the win message to include the comma-delimited guesses as part of the output.
The application uses the length property and does not use an extra variable to count the number of guesses.

Prevent Duplicate Guesses
Since you are tracking the guesses, add validation to check if a number has already been guessed. If it has, display a message and do not count it as a guess.

The application correctly checks the array for a guess first using any means (loop, find(), etc.) before adding a guess to the array.
The application correctly displays a message that a number has already been guessed.
    On load, the page should generate a random number between 1 and 20. The user will enter a guess into a text input and click a button to submit the guess.

    When submitted, one of the following messages should be displayed:

    "You got it!" if the guess is right.

    "No, try a higher number." if the guess is too low.

    "No, try a lower number." if the guess is too high.        

*/