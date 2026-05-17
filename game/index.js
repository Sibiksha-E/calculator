const choices = ["rock", "paper", "scissor"];

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const buttons=document.querySelectorAll("button");

function play(playerchoice) {
  let random = choices[Math.floor(Math.random() * 3)];
  player.textContent = `Player :${playerchoice}`;
  computer.textContent = `Computer :${random}`;

  if (playerchoice === random) {
    result.textContent = "ITS A TIE";
  } else {
    switch (playerchoice) {
      case "rock":
        result.textContent = random === "paper" ? "YOU LOSE" : "YOU WIN";
        break;
      case "paper":
        result.textContent = random === "scissor" ? "YOU LOSE" : "YOU WIN";
        break;
      case "scissor":
        result.textContent = random === "rock" ? "YOU LOSE" : "YOU WIN";
        break;
    }
  }
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        buttons.forEach((b) => {
            b.style.backgroundColor = "";
        });
          e.target.style.backgroundColor="green";
    })
})

  
}
