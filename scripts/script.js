console.log("Im Here!");


//You can't see me!!!
let answer = 47;

let triesLeft = 7

let guessButton = document.querySelector("#GuessButton");

const winMessage = "Congrats!!!!!!"

let guessMessage = document.querySelector("#guessMessage"); //Find a element in the HTML with a same ID as the # or .'s.

let chanceShower = document.querySelector("#chancesLeft");

let HOC = document.querySelector("#HotOrCold");

guessButton.addEventListener('click', function(){
    chanceShower.textContent = "You have " + triesLeft + "tries left!";

    if(+guessInput.value === answer){
       guessMessage.textContent = winMessage;
       chanceShower = "YOU GOT IT! Nevermind! :D"
       guessMessage.style.color = "green";
       console.log("You won!");
    } else if(+guessInput.value < answer){
        guessMessage.textContent = "Too low!"
        console.log("Your answer is low!")
    } else if(+guessInput.value > answer){
        guessMessage.textContent = "Too High!"
        console.log("Numbers to high!");
    }
    
    const guessValue = Number(guessInput.value);
    if(guessValue < 10 + answer && guessValue > answer - 10){
        HOC.textContent = "YOUR VERY CLOSE!";
    } else {
       HOC.textContent = "";
    }

    

    
    if(triesLeft >= 1) {
       triesLeft = triesLeft - 1;
       console.log(triesLeft);
    } else {
       guessMessage.textContent = "Yeah, its joever..."
       console.log("Sorry thats all! you lost :(")
    }
     
});

let guessInput = document.querySelector("#GuessInput");

