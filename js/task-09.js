function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyElem = document.querySelector('body');
const btn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

function changeColor() {
  textColor.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = getRandomHexColor();
}

btn.addEventListener('click', changeColor);
