const randomnum= parseInt(Math.random()*10+1);

const submit = document.querySelector('#subt');
const userInput= document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame= true;

if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault();
    const guess= parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
if(!isNaN(guess)){
  alert("Please enter a valid number")
}else if(guess<1){
  alert("Please enter number greater than 1")
}else if(guess>100){
alert("Plz enter a number greater than 100")
}
else{
  prevGuess.push(guess)
  if(numGuess===11){
    displayGuess(guess);
    displayMessage(`Game Over,Random number was ${randomnum}`)
    endGame()
  }else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}
function checkGuess(guess){
if(guess===randomnum){
displayMessage(`You guessed it right`)
}else if(guess<randomnum){
  displayMessage(`Number is Too low`)
}else if(guess>randomnum){
  displayMessage(`Number is Too High`)
}
}

function displayGuess(guess){
userInput.value=''
guessSlot.innerHTML +=`${guess} `
numGuess++
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){

}
function newGame(){

}