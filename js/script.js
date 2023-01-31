var btnTest = document.querySelector("#test");
var mainText = document.querySelector("#main-text");
var selectBtn = document.querySelector("#select");

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
  }, 1000);
}
