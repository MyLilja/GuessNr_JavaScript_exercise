var randNumber = Math.floor(Math.random() * 100) + 1;
var guessLimit = 8;


document.getElementById("limit").innerHTML = "Your limits: " + limitString;
// var guesses = document.getElementById("submit");
var previousGuesses = "";
document.getElementById("guesses").innerHTML = previousGuesses;
var limitString = guessLimit.toString();
document.getElementById("limit").innerHTML = limitString;


function guessingNumber() {
    var guess = document.getElementById("submit").value;
    document.getElementsByClassName("submit").value = null;
    var numberAPI = "http://numbersapi.com/";
    fetch(numberAPI + guess)
    .then(response => response.text())
    .then(text => document.getElementById("numbersAPI").innerHTML = "Did you know? " + text)
    
    if (guessLimit === 0) {
        document.getElementById("info").innerHTML = "Sorry, but you didn't find the number!"
        document.getElementById("numbersAPI").innerHTML = "";
    } else if(guess > randNumber){
        document.getElementById("info").innerHTML = "You need to go lower!"
        guessLimit -= 1; 
        previousGuesses += guess + " ";
        document.getElementById("guesses").innerHTML = previousGuesses;
    } else if (guess < randNumber){
        document.getElementById("info").innerHTML = "You need to go higher!"
        guessLimit -= 1;
        previousGuesses += guess + " ";
        document.getElementById("guesses").innerHTML = previousGuesses;
    } else if (guessLimit === 0) {
        document.getElementById("info").innerHTML = "You didn't find the number"
    } else {
        document.getElementById("info").innerHTML = "DING DING DING! You win!"
        previousGuesses = "";
        document.getElementById("guesses").innerHTML = previousGuesses;
    }

    console.log(guessLimit)
    document.getElementById("submit").value = null;
    limitString = guessLimit.toString();
    document.getElementById("limit").innerHTML =  limitString;
}

function newGame(){
    randNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("info").innerHTML = "";
    previousGuesses = "";
    document.getElementById("guesses").innerHTML = previousGuesses;
    guessLimit = 8; 
    limitString = guessLimit.toString();
    document.getElementById("limit").innerHTML = limitString;
    document.getElementById("numbersAPI").innerHTML = "";
}