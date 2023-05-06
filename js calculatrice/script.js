
let display = document.getElementById('display');

function addToDisplay(value) {
  display.textContent += value;
  console.log(value);
}

function clearDisplay() {
  display.textContent = '';
  console.log("cean");
}

function calculate() {
  let result = eval(display.textContent);
  display.textContent = result;
  console.log("reu");
}

let push = document.querySelectorAll("button")




