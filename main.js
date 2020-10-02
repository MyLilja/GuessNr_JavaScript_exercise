var randNumber = Math.floor(Math.random() * 100) + 1;
var guessLimit = 7;

function guessingNumber() {
    var guess = document.getElementById("guessedNumber").value;
    document.getElementById("guessedNumber").value = "";

    if(guess > randNumber){
        document.getElementById("info").innerHTML = "You need to go lower!"
        guessLimit--; 
    }else if (guess < randNumber){
        document.getElementById("info").innerHTML = "You need to go higher!"
        guessLimit--;
    } else {
        document.getElementById("info").innerHTML = "DING DING DING! You win!"
    }
    document.getElementById("guesses").value = guess;
}

function newGame(){
    randNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("info").innerHTML = "";
    guessLimit = 7;
}