let myScore = 0;
let compScore = 0;
let mygrandScore = 0;
let compgrandScore = 0;
function checkScore() {   
    if (compScore === 5) {
        scoreBoard.textContent = "SkyNet took over the world. Find the nearest bunker and sing a RATM song to highten the spirit !!! Choose a tool to play again.";
        compgrandScore ++;
        compScore = 0;
        myScore = 0;
        
        
    } else if (myScore === 5) {
        scoreBoard.textContent = "They stopped looking for Sarah Conner. Resistance wins. But they'll be back !!! Choose a tool to play again.";
        mygrandScore ++;
        compScore = 0;
        myScore = 0;
       
        
    } else {
        scoreBoard.textContent = `You: ${myScore} SkyNet: ${compScore}`;
    }
    grandscore.textContent = `Beat : ${mygrandScore} - Beaten:${compgrandScore}`;
}



function compChoice() {
    const random = Math.random();
    return Math.floor(random * 3);
}

const toolChoice = ["rock", "paper", "scissor"];
let computer ;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const scoreBoard = document.querySelector("h3");
const roundTable = document.querySelector("ul");
const grandscore = document.querySelector("h2");



rock.addEventListener("click", () => {
    computer = toolChoice[compChoice()];
    if (computer === "rock") {
        roundTable.textContent = `AI's choice was : ${computer}...So it is a tie.`;
    } else if (computer === "paper") {
        compScore += 1;
        roundTable.textContent = `AI's choice was : ${computer}...You lose :(`;
        checkScore();
    } else {
        myScore += 1;
        roundTable.textContent = `AI's choice was : ${computer}  ...  You win :)`;
        checkScore();
    }
})

paper.addEventListener("click", () => {
    computer = toolChoice[compChoice()];
    if (computer === "paper") {
        roundTable.textContent = `AI's choice was : ${computer} ...   So it is a tie...`;
    } else if (computer === "scissor") {
        compScore += 1;
        roundTable.textContent = `AI's choice was : ${computer}  ...  You lose :(`;
        checkScore();
    } else {
        myScore += 1;
        roundTable.textContent = `AI's choice was : ${computer}  ...  You win :)`;
        checkScore();
    }
})

scissor.addEventListener("click", () => {
    computer = toolChoice[compChoice()];
    if (computer === "scissor") {
        roundTable.textContent = `AI's choice was : ${computer}  ...  So it is a tie...`;
    } else if (computer === "rock") {
        compScore += 1;
        roundTable.textContent = `AI's choice was : ${computer}  ...  You lose :(`;
        checkScore();
    } else {
        myScore += 1;
        roundTable.textContent = `AI's choice was : ${computer} ...  You win :)`;
        checkScore();
    }
})





