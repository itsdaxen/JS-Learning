const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const closeBtn = document.querySelector(".close");
const divSteps = document.querySelector(".steps");
const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
const message = document.querySelector(".message");
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");

let step = 1;
let isWindowVisible = true;

function updateUI() {
  message.textContent = `Step ${step}: ${messages[step - 1]}`;

  if (step >= 1) step1.classList.add("active");
  else step1.classList.remove("active");

  if (step >= 2) step2.classList.add("active");
  else step2.classList.remove("active");

  if (step >= 3) step3.classList.add("active");
  else step3.classList.remove("active");
}

updateUI();

function toggleWindow() {
  divSteps.classList.toggle("hidden");
  isWindowVisible = !isWindowVisible;
}

closeBtn.addEventListener("click", () => {
  toggleWindow();
});

btnPrevious.addEventListener("click", () => {
  if (step > 1) step -= 1;
  updateUI();
});

btnNext.addEventListener("click", () => {
  if (step < 3) step += 1;
  updateUI();
});
