function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");
let amount ;  
  
inputValue.addEventListener("input", (event) => {
 amount = event.currentTarget.value;
});

function createBoxes() { 
  for (let i = 0; i < amount; i+=1){
    let div = document.createElement("div");
    div.style.width = String(30 + i*10 + "px");
    div.style.height = String(30 + i*10 + "px");
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add('div-item');
    divBoxes.append(div);
  }
}

function destroyBoxes() {
  const divs = document.querySelectorAll(".div-item");
  divs.forEach((div) => div.remove());
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);