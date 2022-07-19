const formElem = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();
 const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    } else {
        const formElements = {
            email, password
        };
        formElements.email = email.value;
        formElements.password = password.value;
        console.log(formElements);      
    }
  event.currentTarget.reset();
}

formElem.addEventListener("submit", handleSubmit);
