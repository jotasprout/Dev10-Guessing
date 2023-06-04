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
    //return maxNumber;
    log_maxNumber(maxNumber);
    tellUserMax.innerHTML = `Choose a number between 1 and ${maxNumber}.`;
}

get_MaxNumber();

let userMaxDisplay = document.getElementById("tellUserMax");

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

function examineGuess() {
    let valid_input = false;

    let userGuess = Number(document.getElementById("userGuess").value);
    console.log(`User entered ${userGuess}`);
    
    while(!valid_input) {
     
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

    //return maxNumber;
    log_maxNumber(maxNumber);
    tellUserMax.innerHTML = `Choose a number between 1 and ${maxNumber}.`;
}

examineGuess();