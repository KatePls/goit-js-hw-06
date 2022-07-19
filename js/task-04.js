let counterValue = document.querySelector('#value');


const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function changeMoreCounter() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
    return;
}    

function changeLessCounter() {
   counterValue.textContent -= 1;
    return; 
}

incrementBtn.addEventListener("click", changeMoreCounter);
decrementBtn.addEventListener("click", changeLessCounter);