var mainBtn = document.querySelector("#main-btn");
var mainText = document.querySelector("#main-text");
var selectBtn = document.querySelector("#select");
var oppoHands = document.querySelectorAll('.opponent-hand');
var userHands = document.querySelectorAll('.user-hand');
var btnHand = document.querySelectorAll('.btn-hand');

mainText.addEventListener("click", () => {
    if (mainText.textContent == "start game") {
        startGame();
    }
});

function startGame() {
  mainText.classList.add("fade-out");
  setTimeout(() => {
    mainText.textContent = "select";
    mainText.classList.add("show");
    mainBtn.classList.remove('btn-start')
  }, 500);
  oppoHands[0].style.transform = "translate(0%, -60%)";
  oppoHands[1].style.transform = "translate(0%, -60%)";
  oppoHands[2].style.transform = "translate(0%, -60%)";
  userHands[0].style.transform = "translate(0%, 30%)";
  userHands[1].style.transform = "translate(0%, 30%)";
  userHands[2].style.transform = "translate(0%, 30%)";

  btnHand[0].style.opacity = "1";
  btnHand[2].style.opacity = "1";
  btnHand[1].style.opacity = "1";
  
}
