const inputText = document.querySelector('#validation-input');

function changeBorderColor(event) {
    if (Number(inputText.value.length) === Number(inputText.attributes["data-length"].value)) {
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
        return;
    } else {
        inputText.classList.toggle('invalid');
        return;
    }
}

inputText.addEventListener("blur", changeBorderColor);