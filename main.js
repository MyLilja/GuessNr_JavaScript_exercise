var randNumber = Math.floor(Math.random() * 100) + 1;

console.log(randNumber);

function guessingNumber() {
    var guess = document.getElementById("guessedNumber").value;
    document.getElementById("guessedNumber").value = "";
    

    console.log(guess);

    if(guess > randNumber){
        document.getElementById("info").innerHTML = "You need to go lower!"
    }else if (guess < randNumber){
        document.getElementById("info").innerHTML = "You need to go higher!"
    } else {
        document.getElementById("info").innerHTML = "DING DING DING! You win!"
    }

    guess.value = 0;
}

function newGame(){
    randNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randNumber);
    document.getElementById("info").innerHTML = "";
}