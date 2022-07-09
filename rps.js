const playerBtn = document.querySelectorAll(".player-btn");
const playerImg = document.getElementById('player-img');
const computerImg = document.getElementById('computer-img');
const btnStart = document.querySelector('.start');
const btnEnd = document.querySelector('.end');

let player;
let computer;
let score = [0,0];

for (let i = 0; i < playerBtn.length; i++) {
      playerBtn[i].addEventListener("click", function () {
            player = playerBtn[i].innerText;
            playerImg.src = `./images/${player}.png` ;
            document.getElementById('player-choice').textContent = player;
      })
}

btnStart.addEventListener('click', function() {
      time = setInterval(randomImg, 10);
})


function randomImg() {
      let genRandom = Math.floor(Math.random() * 3 + 1);
      if (genRandom == 1) {
            computerImg.src = "./images/Rock.png";
            computer ="Rock"; 
      }
      else if (genRandom == 2) {
            computerImg.src = "./images/Paper.png"; 
            computer ="Paper"; 
      }
      else {
            computerImg.src = "./images/Scissors.png"; 
            computer ="Scissors"; 
      }
}

btnEnd.addEventListener('click', function() {
      clearInterval(time);
      document.getElementById('computer-choice').textContent = computer;
      let result = checkWinner(player, computer);
      if (result == "Player") {
            result += " Wins!";
            score[0]++;
      } else if (result == "Computer") {
           result += " Wins!";
           score[1]++;
      } else {
            result += " Match!";
      }
      document.getElementById('player-score').textContent = score[0];
      document.getElementById('computer-score').textContent = score[1];
      document.getElementById('winner').innerHTML = `<h1 style="color: green;">${result}</h1>`;

})

function checkWinner (pl,co) {
      if (pl == co) {
            return "Draw";
      }
      // rock & paper = paper
      // rock & scissors = rock
      // paper & scissors = scissors
      if (pl === "Rock") {
            if(co === "Paper") {
                  return "Computer";
            } else {
                  return "Player";
            }
      }
      if (pl === "Paper") {
            if(co === "Scissors") {
                  return "Computer";
            } else {
                  return "Player";
            }
      }
      if (pl === "Scissors") {
            if (co === "Rock") {
                  return "Computer";
            } else {
                  return "Player";
            }
      } 
}




       
