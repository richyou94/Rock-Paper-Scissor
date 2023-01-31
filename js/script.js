const mainBtn = document.querySelector("#main-btn");
const mainText = document.querySelector("#main-text");
const selectBtn = document.querySelector("#select");
const oppoHands = document.querySelectorAll(".opponent-hand");
const userHands = document.querySelectorAll(".user-hand");
const btnHand = document.querySelectorAll(".btn-hand");

mainText.addEventListener("click", () => {
  if (mainText.textContent == "start game") {
    startGame();
  }
  if (mainText.textContent == "Play again?") {
    resetGame();
  }
});

btnHand.forEach((btn) => {
  btn.addEventListener("click", () => {
    let userChoice = btn.textContent;
    let userIndex;
    if (userChoice == "rock") {
      userIndex = 0;
    }
    if (userChoice == "paper") {
      userIndex = 1;
    }
    if (userChoice == "scissor") {
      userIndex = 2;
    }
    let opponentChoice = randomizeHand();
    let result = rpsBattle(userChoice, opponentChoice);
    let oppoIndex;
    if (opponentChoice == "rock") {
      oppoIndex = 2;
    }
    if (opponentChoice == "paper") {
      oppoIndex = 1;
    }
    if (opponentChoice == "scissor") {
      oppoIndex = 0;
    }

    fadeOutBtns();
    mainBtn.classList.add("hide");
    var timerText = document.querySelector(".timer-countdown");
    timerText.classList.remove("hide");
    var timeLeft = 3;
    var timeInterval = setInterval(() => {
      if (timeLeft == 3) {
        timerText.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft == 2) {
        userHands[userIndex].style.transform = "translate(0%, -40%)";
        timerText.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft == 1) {
        oppoHands[oppoIndex].style.transform = "translate(0%, -20%)";
        timerText.textContent = timeLeft;
        timeLeft--;
      } else {
        timerText.textContent = "";
        clearInterval(timeInterval);
        timerText.textContent = result;
      }
    }, 700);

    setTimeout(() => {
      mainBtn.classList.remove("hide");
      timerText.textContent = "";
      mainText.textContent = "Play again?";
      mainBtn.classList.add("btn-start");
      mainText.classList.remove("show");
    }, 4500);
  });
});

function resetGame() {
  mainText.textContent = "start game";
  oppoHands.forEach((btn) => {
    btn.style.transform = "translate(0%, -20%)";
  });
  userHands.forEach((btn) => {
    btn.style.transform = "translate(0%, -40%)";
  });
  btnHand.forEach((btn) => {
    btn.setAttribute("style", "pointer-events: none");
    btn.style.opacity = "0";
  });
}

function displayResult(gameResult, user, opponent) {
  timerText.textContent = "draw";

  document.querySelector(`.opponent-${opponent}`).style.transform =
    "translate(0%, -20%);";
}

function fadeOutBtns() {
  btnHand.forEach((btn) => {
    btn.style.opacity = "0";
  });
}

const randomizeHand = () => {
  const rpsChoices = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * 3);

  let choice = rpsChoices[randomIndex];
  return choice;
};
function rpsBattle(user, opponent) {
  if (user == opponent) {
    return "draw!";
  }
  if (user == "rock" && opponent == "scissor") {
    return "you win!";
  }
  if (user == "rock" && opponent == "paper") {
    return "you lose.";
  }
  if (user == "paper" && opponent == "rock") {
    return "you win!";
  }
  if (user == "paper" && opponent == "scissor") {
    return "you lose.";
  }
  if (user == "scissor" && opponent == "rock") {
    return "you lose.";
  }
  if (user == "scissor" && opponent == "paper") {
    return "you win!";
  }
}

function startGame() {
  mainText.classList.add("fade-out");
  setTimeout(() => {
    mainText.textContent = "select";
    mainText.classList.add("show");
    mainText.classList.remove("fade-out");

    mainBtn.classList.remove("btn-start");
  }, 500);
  oppoHands.forEach((btn) => {
    btn.style.transform = "translate(0%, -60%)";
  });

  userHands.forEach((btn) => {
    btn.style.transform = "translate(0%, 30%)";
  });

  btnHand.forEach((btn) => {
    btn.setAttribute("style", "pointer-events: auto");
    btn.style.opacity = "1";
  });
}
