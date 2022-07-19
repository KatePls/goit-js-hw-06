const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

function changeFontSize() {
    const fontValue = inputRange.value + "px";
    spanText.style.fontSize = fontValue;
    return;
}

inputRange.addEventListener("input", changeFontSize);