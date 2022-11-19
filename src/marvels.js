const words = 
[['Type of variables JS','const'], ['Type of objects JS','array'],
['Data types JS', 'function'],['Reserved word JS', 'debugger'],
['Array method JS','splice']];

let index;
let indexPrev=-1;
let wordFieldAr=[];
const sectionElement = document.querySelector(".word-guess");
let letterElements 
const questionElement = document.querySelector(".question");
const gameOverElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");
let flGameOver = false;
let colorsOld=[];


startGame();


function onChange(event) 
{
const wordGuess = event.target.value;
event.target.value = '';
const wordAr = Array.from (wordGuess);
const colors = wordFieldAr.map((l, i) => 
  {
    return  colorsOld[i] == 'white' || wordAr.includes(l) ? 'white' : 'black';
  }
);
colorsOld = colors;
colors.forEach((c, i) => 
       letterElements[i].style.background = c);
if (colors.includes('black') == false)
             endGame(wordAr); 
}


function startGame ()
{
  gameOverElement.innerHTML = '';
   

   do {
    index = Math.floor(Math.random() * words.length);
    console.log ("word" , words[index][1]);

} while (indexPrev == index);
indexPrev = index;

   sectionElement.innerHTML = getDivsElements();
   letterElements = document.querySelectorAll(".letter-guess");
    questionElement.innerHTML = `Question: ${words[index][0]}`;
    wordFieldAr.forEach((l, i) =>        
                        letterElements[i].innerHTML = l);
}

function getDivsElements() {
 
   let wordField = words[index][1];
   wordFieldAr = Array.from(wordField);
   let res = wordFieldAr.map(letter => `<div class="letter-guess">${letter}</div>`);
   return res.join('');
}

function endGame (wordAr) {
   
    gameOverElement.innerHTML = "All letters now open, if you want to play once more, press the button"
    gameOverElement.style.color = "green";
    colorsOld = colorsOld.map (c => c = 'black');
 }

function checkEnd (flGameOver) {
if (flGameOver) {
   
   sectionElement.innerHTML = '';
   questionElement.innerHTML = '';
   gameOverElement.innerHTML = 'Whaiting you once more';
    return;
}
}



