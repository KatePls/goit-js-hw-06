const inputText = document.querySelector('#validation-input');

function changeBorderColor() {
    if (Number(inputText.value.length) === Number(inputText.attributes["data-length"].value)) {
        inputText.classList.add('valid');
        return;
    } else {
        inputText.classList.add('invalid');
        return;
    }
}

inputText.addEventListener("blur", changeBorderColor);