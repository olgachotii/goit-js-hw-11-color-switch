const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let timeoutId = null;

const refs = {
  battonStart: document.querySelector('[data-action="start"]'),
  battonStop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

refs.battonStart.addEventListener("click", colorSwitch);
refs.battonStop.addEventListener("click", remuveColorSwitch);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorSwitch() {
  timeoutId = setInterval(() => {
    bodyColor(colors);
  }, 1000);
  refs.battonStart.setAttribute("disabled", true);
}

function remuveColorSwitch() {
  clearTimeout(timeoutId);
  refs.battonStart.removeAttribute("disabled");
}

function bodyColor(colors) {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
