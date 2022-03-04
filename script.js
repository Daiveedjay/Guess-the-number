"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log((document.querySelector(".guess").value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 7;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Enter") {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
      // document.querySelector(".message").textContent =
      //   "⛔ No number, please input one";
      displayMessage("⛔ No number, please input one");

      //When player wins
    } else if (guess === secretNumber) {
      // document.querySelector(".message").textContent = "Correct Number 😁";
      displayMessage("Correct Number 😁");

      document.querySelector("body").style.backgroundColor = "#60b347";

      document.querySelector(".number").style.width = "30rem";

      document.querySelector(".number").textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      //When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector(".message").textContent =
        //   guess > secretNumber ? "Number too high" : "Number too low";
        displayMessage(
          guess > secretNumber ? "Number too high" : "Number too low"
        );
        score = score - 1;
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = "#ff0000";
      } else {
        document.querySelector(".message").textContent = "You lost the game 😭";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there's no input
  if (!guess) {
    // document.querySelector(".message").textContent =
    //   "⛔ No number, please input one";
    displayMessage("⛔ No number, please input one");

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number 😁";
    displayMessage("Correct Number 😁");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Number too high" : "Number too low";
      displayMessage(
        guess > secretNumber ? "Number too high" : "Number too low"
      );
      score = score - 1;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    } else {
      document.querySelector(".message").textContent = "You lost the game 😭";
      document.querySelector(".score").textContent = 0;
    }
  }

  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Number Too low 😪";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😫 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);

//   if (e.key === "Enter") {

//   }
// });

//Executing the again button functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 7;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing";
  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#333";

  document.querySelector(".number").style.width = "15rem";
});
