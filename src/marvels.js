const words = 
[['Type of variables JS','const'], ['Type of objects JS','array'],
['Data types JS', 'function'],['Reserved word JS', 'debugger'],
['Array method JS','splice']];

let index;
let indexPrev=-1;
let wordFieldAr=[];
const sectionElement = document.querySelector(".word-guess");
//!!!
//sectionElement.innerHTML = getDivsElements();
const letterElements = document.querySelectorAll(".letter-guess");
const questionElement = document.querySelector(".question");
const gameOverElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");
let flGameOver = false;
let colorsOld=[];

startGame();


function onChange(event) {
    alert ("start1");
    //const word = Array.from (words[index][1]);
    //alert (word);
   
   

const wordGuess = event.target.value;
event.target.value ='';

checkEnd(flGameOver);

alert (flGameOver);

//alert (wordGuess);
alert (wordGuess.length);
alert (wordFieldAr.length);
if (wordGuess.length != wordFieldAr.length) {
    alert(`A word should contain ${wordFieldAr.length} letters`)
} else {
const wordAr = Array.from (wordGuess);


const colors = wordFieldAr.map((l, i) => {
  
   let res;
   if (colorsOld[i] != 'white')
     {
       
        res =  wordAr.includes(l) ? 'white' : 'black';
    }
    else {
        res = 'white';
    }
 
    
    return res;
});
alert (colors);
colorsOld = colors;

//!!!
colors.forEach((c, i) => letterElements[i].style.background = c);

if (colors.includes('black') == false)
{ alert ('end start 1'); endGame(wordAr); }
else
{}
}
}

function startGame ()
{
    alert ("start");
 
   alert (indexPrev);
   gameOverElement.innerHTML = '';
   //playAgainElement.innerHTML = '';
   //!!!
   sectionElement.innerHTML = getDivsElements();
    questionElement.innerHTML = `Question: ${words[index][0]}`;
    wordFieldAr.forEach((l, i) => letterElements[i].innerHTML = l);
}

function getDivsElements() {
    
    do {
        index = Math.floor(Math.random() * words.length);
 
    } while (indexPrev == index);
    indexPrev = index;
   let wordField = words[index][1];
    
    wordFieldAr = Array.from(wordField);
    let res = wordFieldAr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}

function endGame (wordAr) {
    alert ("start end");
    alert (wordAr);
    alert (wordFieldAr);
    
     gameOverElement.innerHTML = "All letters now open, if you want to play once more, press the button"
    
   
//playAgainElement.innerHTML = "Play again";
  // playAgainElement.style.display='block';
   wordGuess.innerHTML = '';
   
   flGameOver = true;
   alert ("indexPrev");
   //indexPrev = -1;
}

function checkEnd (flGameOver) {
if (flGameOver) {
    alert("game is over");
    wordGuess.innerHTML = '';
    gameOverElement.innerHTML = '';
    //gameOverElement.innerHTML = 'Whaiting you once more';
    return;
}
}



