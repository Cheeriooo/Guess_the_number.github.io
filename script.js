let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Empty value 🫢");
  } else if (guess === secretNumber) {
    displayMessage("Correct ✅");
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "too High❌" : "too Low❌");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("game Over😂");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.background = "#333";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".message").textContent = "Start guessing...";
});
