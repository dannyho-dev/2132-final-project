const ERRORS_ALLOWED = 5;
const fetch_file_location = "./data/fruits.json";

let gameStart = false;
let obtainedList = false;
let theWordList;
let theWord;
let theWordArr;
let numLetters = 0;
let numErrors = 0;

// Tags
const rowQ = document.getElementById("keyrowQ");
const rowA = document.getElementById("keyrowA");
const rowZ = document.getElementById("keyrowZ");
const newWordBtn = document.getElementById("newword");
const output = document.getElementById("output");
const pOneHP = document.getElementById("pone-hp");
const pOneHPText = document.getElementById("pone-hp-text");
const pTwoHP = document.getElementById("ptwo-hp");
const pTwoHPText = document.getElementById("ptwo-hp-text");

const lettersQ = ["Q","W","E","R","T","Y","U","I","O","P"];
const lettersA = ["A","S","D","F","G","H","J","K","L"];
const lettersZ = ["Z","X","C","V","B","N","M"];

const spinner = new Image();
spinner.src = './images/spinner.gif';
spinner.alt = 'Loading';

createRow(rowQ, lettersQ);
createRow(rowA, lettersA);
createRow(rowZ, lettersZ);

newWordBtn.addEventListener("click", (e) => {
    gameStart = true;
     
    if (!obtainedList) {
        output.appendChild(spinner);
        newWordBtn.textContent = "Try Another Word";
        fetch(fetch_file_location)
        .then(function(response){
            if(response.ok){
                return response.json();
            }else{
                console.log("Network error: fetch failed");
            }            
        })
        .then(function(data){
            output.innerHTML = '';
            theWordList = shuffle(data);
            resetGame(theWordList);
            obtainedList = true;
        })
        .catch(function(error){
            output.innerHTML = `<p>${error}. Please try again.</p>`;
    });
    } else {
        output.innerHTML = '';
        resetGame(theWordList);
    }
    
})

// Functions
function createRow(tag, letters) {
    letters.forEach(letter => {
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.classList.add("key", letter);
        btn.disabled = true;
        btn.addEventListener("click", (e) => handleGuess(letter, e));
        tag.appendChild(btn);
    });
}

function createDisplay(stringArr) {
    stringArr.forEach((string) => {
        const div = document.createElement("div");
        div.textContent = string.toUpperCase();
        div.classList.add("game-letter");
        div.classList.add("hidden-letter");
        output.appendChild(div);
    })
}

function handleGuess(keyPress, event) {
    if (gameStart) {
        event.target.disabled = true;
        if (theWordArr.includes(keyPress.toLowerCase())) {
            let numCorrect = 0;
            theWordArr.forEach((word) => {
                if (word === keyPress.toLowerCase()){
                    numCorrect++;
                }
            })
            numLetters += numCorrect;
            if (numLetters >= theWordArr.length) {
                console.log("You Win!");
                lockKeys();
                gameStart = false;
                //Victory logic
            }
        } else {
            numErrors++;
        }
        updateHP();

        if (numErrors >= ERRORS_ALLOWED) {
            gameStart = false;
            lockKeys();
            console.log("word wasn't guessed");
            //Lost logic
        }
    } else {
        console.log("Game has not started")
    }
}

function resetGame(list) {
    numLetters = 0;
    numErrors = 0;
    document.querySelectorAll(".key").forEach(btn => {
        btn.disabled = false;
    });
    theWord = list.pop().word;
    theWordArr = theWord.split('');
    createDisplay(theWordArr);
    updateHP();
}

function lockKeys() {
    document.querySelectorAll(".key").forEach(btn => {
        btn.disabled = true;
    });
}

function updateHP() {
    pOneHP.style.width = 100-(numErrors/ERRORS_ALLOWED * 100) + '%';
    pOneHPText.textContent = `${ERRORS_ALLOWED-numErrors} / ${ERRORS_ALLOWED}`;
    pTwoHP.style.width = 100-(numLetters/theWordArr.length * 100) + '%';
    pTwoHPText.textContent = `${theWordArr.length-numLetters} / ${theWordArr.length}`;
}

/*
Function obtained from chatgpt with the following prompt
in javascript can you write me a function that shuffles the items in an array of objects?
*/
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at i and j using array destructuring
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}