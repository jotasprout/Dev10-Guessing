let maxNumber;

function log_maxNumber(maxNum) {
    console.log(`User said ${maxNum} is the maximum number`);
}

function get_MaxNumber() {
    let valid_input = false;
    
    while(!valid_input) {
        input = window.prompt("Enter the maximum number.");
        maxNumber = Number(input);
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

*/

function guess_Number() {
    let valid_input = false;
    
    while(!valid_input) {
        input = window.prompt("Enter the maximum number.");
        maxNumber = Number(input);
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

guess_Number();