//#region Fields
var randNumber = Math.floor(Math.random() * 100) + 1;
var guessLimit = 8;
var limitString = guessLimit.toString();
document.getElementById("limit").innerHTML = limitString;
var previousGuesses = "";
document.getElementById("guesses").innerHTML = previousGuesses;
var numberAPI = "http://numbersapi.com/";
var gameIsComplete = false;
//#endregion


//Decides whether the game is still running or not. Choose function thereafter and nullifys 
//submit field.
function playGame() {
    if (!gameIsComplete) {
        var guess = Number(document.getElementById("submit").value);
        if (guessLimit === 0 || guess === randNumber) {
            gameComplete(guess);  
        } else if (guess === 0) {
            return
        } else {   
            guessingNumber(guess);
        }
    } else {
        document.getElementById("submit").value = null;
    }
}

//Function for completing the game by winning or losing.
function gameComplete(guess) {
    document.getElementById("submit").value = null;
    if (!gameIsComplete){
        if (guess === randNumber){
            adjustPreviousGuesses(guess);
            document.getElementById("info").innerHTML = "DING DING DING! You win!"     
            numbersAPI(guess)
            adjustLimit(guessLimit);
        } else {
            document.getElementById("numbersAPI").innerHTML = "";
            document.getElementById("info").innerHTML = "Sorry, but you didn't find the number!"
        }
        gameIsComplete = true;
    } else {
        return;
    }
}

//Hints whether the guessed number is to low or to high
function guessingNumber(guess) {
    numbersAPI(guess);   
    if(guess < randNumber){
        document.getElementById("info").innerHTML = "You need to go higher!"       
    } else {
        document.getElementById("info").innerHTML = "You need to go lower!"
    } 
    adjustLimit();
    document.getElementById("submit").value = null;
    adjustPreviousGuesses(guess);
}

//Adjust the limit of number of guesses left.
function adjustLimit(limit) {
    if (limit === 0){
        guessLimit = 8; 
        limitString = guessLimit.toString();
        document.getElementById("limit").innerHTML = limitString;
    } else {
        guessLimit--;
        limitString = guessLimit.toString();
        document.getElementById("limit").innerHTML =  limitString;
    }
}

//Returns some random fact about guessed number.
function numbersAPI(guess) {
    if(guess != 0){
        fetch(numberAPI + guess)
        .then(response => response.text())
        .then(text => document.getElementById("numbersAPI").innerHTML = "Did you know? " + text)
    } else {
        document.getElementById("numbersAPI").innerHTML = "";
    }
}

//Lists all the previous guesses that the player have submitted.
function adjustPreviousGuesses(guess) {
    if(guess != ""){
        previousGuesses += guess + "  ";
        document.getElementById("guesses").innerHTML = previousGuesses;
    } else {
        previousGuesses = "";
        document.getElementById("guesses").innerHTML = previousGuesses;
    }
}

//Starts a new game and resets all fields.
function newGame() {
    randNumber = Math.floor(Math.random() * 100) + 1;
    gameIsComplete = false;
    document.getElementById("info").innerHTML = "";
    adjustPreviousGuesses("");
    adjustLimit(0);
    numbersAPI(0);
    document.getElementById("submit").value = null;
}