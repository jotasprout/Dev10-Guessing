let maxNumber;

function log_maxNumber(maxNum) {
    console.log(`User said ${maxNum} is the maximum number`);
}

function get_MaxNumber() {
    let valid_input = false;

    input = window.prompt("Enter the maximum number.");
    
    while(!valid_input) {
        
        maxNumber = Number(input);
        // round up any decimal number
        maxNumber = Math.round(input);
        console.log(`The round of ${input} is ${maxNumber}`);
/**/
        if(Math.sign(maxNumber) < 1) {
            input = window.prompt("That is not a positive number. Enter a maximum number greater than 1.");
            maxNumber = Number(input);
        }

        else if(isNaN(maxNumber)) {
            input = window.prompt("That is not a number. Enter a maximum number greater than 1.");
            maxNumber = Number(input);
        }
    
        else if(maxNumber != NaN && maxNumber > 0) {
            valid_input = true;
        }
    }

    // if maxNumber is valid
    log_maxNumber(maxNumber);
    let userMaxDisplay = document.getElementById("tellUserMax");
    userMaxDisplay.innerHTML = `Choose a number between 1 and ${maxNumber}.`;
}

get_MaxNumber();



/* 
val = Math.floor(Math.random() * 20) + 1;
console.log(`A random number between 1 and 20 is ${val}`);

val = Math.floor(Math.random() * 50) + 5;
console.log(`A random number between 5 and 55 is ${val}`);
*/
let randNum;

function genRandNum(maxNumber){
    randNum = Math.floor(Math.random() * maxNumber + 1);
    console.log(`A random number between 1 and ${maxNumber} is ${randNum}`);
}

genRandNum(maxNumber);
let userGuess;

let feedback = document.getElementById("guessValidationResponse");

feedback.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("guessing").click();
    }
  });

let guessArray = [];
let guessArrayLength;

function validateGuess() {
    //let valid_input = false;
    console.log(`max number is ${maxNumber}`);
    userGuess = Number(document.getElementById("userGuess").value);
    console.log(`User entered ${userGuess}`);
    
    if (Math.sign(userGuess) > maxNumber) {
        feedback.innerHTML = "That number is not within range.";
        console.log(`User guessed ${userGuess} which is higher than maxNum ${maxNumber}`);
        userGuess = Number(document.getElementById("userGuess").value);
    }

    else if(Math.sign(userGuess) < 1) {
        feedback.innerHTML = "That number is not within range.";
        userGuess = Number(document.getElementById("userGuess").value);
    }
/**/
    else if(isNaN(userGuess)) {
        feedback.innerHTML = "That is not a number. Enter a number.";
        userGuess = Number(document.getElementById("userGuess").value);
    }

    else {
        gradeGuess(userGuess);
    }

}

function gradeGuess(userGuess) {
    if(userGuess == randNum){
        guessArray.push(userGuess);
        guessArrayLength = guessArray.length;
        let arrayString = guessArray.join(", ");
        feedback.innerHTML = `You got it! It took you ${guessArrayLength} tries and your guesses were ${arrayString}.`;
    }
    else if (userGuess > randNum) {
        feedback.innerHTML = "No, try a lower number.";
        guessArray.push(userGuess);
        console.log(guessArray);
        guessArrayLength = guessArray.length;
        console.log(`User has guessed ${guessArrayLength} times.`);
        userGuess = Number(document.getElementById("userGuess").value);
    }
    else {
        feedback.innerHTML = "No, try a higher number.";
        guessArray.push(userGuess);
        console.log(guessArray);
        guessArrayLength = guessArray.length;
        console.log(`User has guessed ${guessArrayLength} times.`);
        userGuess = Number(document.getElementById("userGuess").value);
    }
}