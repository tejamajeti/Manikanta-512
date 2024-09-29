

const buttonsList = ["+","-","*","/"]

let buttonsContainer = document.getElementById("buttonsCard");

function CreateAndAppendButtons(eachButton){
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("button-el");
    buttonEl.id = "button"+eachButton;
    buttonEl.textContent = eachButton;
    buttonEl.value = eachButton;
    buttonsContainer.appendChild(buttonEl);
}

buttonsList.map(eachButton => CreateAndAppendButtons(eachButton))