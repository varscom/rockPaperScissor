let myScore = 0;
let compScore = 0;
function checkScore() {   
    if (compScore === 5) {
        alert("Game over. You lose. Please try again");
    } else if (myScore === 5) {
        alert("Game over. You win. Play again to enjoy more.");
    } else {
        scoreBoard.textContent = `You: ${myScore} SkyNet: ${compScore}`;
    }
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





