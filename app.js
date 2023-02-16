let isGameOver = false;
// button elements
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const submitBtn = document.querySelector(".submit");
// number input element
let input = document.querySelector(".number");

let randomNum = () => {
  return Math.floor(Math.random() * 20 + 1);
};
// random number
let secretNumber = randomNum();
// status text
let statusText = document.querySelector(".status");

//button functions
decreaseBtn.addEventListener("click", () => {
  console.log(input);
  input.value = Number(input.value) - 1;
});
increaseBtn.addEventListener("click", () => {
  console.log(input);
  input.value = Number(input.value) + 1;
});
submitBtn.addEventListener("click", () => {
  const inputNumber = Number(input.value);
  if (!isGameOver) {
    if (inputNumber === secretNumber) {
      statusText.textContent = "correct";
      submitBtn.textContent = "play again";
      isGameOver = true;
    } else if (inputNumber < secretNumber) {
      statusText.textContent = "too low";
    } else if (inputNumber > secretNumber) {
      statusText.textContent = "too high";
    }
    return;
  } else {
    isGameOver = false;
    statusText.textContent = "Game start";
    secretNumber = randomNum();
    input.value = "";
  }
});

console.log(decreaseBtn);
