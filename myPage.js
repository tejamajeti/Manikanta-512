

const buttonsList = ["+","-","*","/"]

let buttonsContainer = document.getElementById("buttonsCard");

const errorPara = document.getElementById("errorPara");
errorPara.style.color = "red";
errorPara.style.fontFamily = "Roboto";
errorPara.style.fontSize = "13px";
errorPara.style.textAlign = "center";


const firstNum = document.getElementById("firstNum");
const secondNum = document.getElementById("secondNum");
const output = document.getElementById("output");

function calculator(eachButton){
    const firstNumValue = firstNum.value;
    const secondNumValue = secondNum.value;
    if (firstNumValue === ""){
        errorPara.textContent = "Enter First Number";
    } else if (secondNumValue === ""){
        errorPara.textContent = "Enter Second Number"
    } else{
        errorPara.textContent = "";
        switch(eachButton){
            case "+":
                output.value = parseInt(firstNumValue)+parseInt(secondNumValue);
                break;
            case "-":
                output.value = parseInt(firstNumValue)-parseInt(secondNumValue);
                break;
            case "*":
                output.value = parseInt(firstNumValue)*parseInt(secondNumValue);
                break;
            case "/":
                output.value = parseInt(firstNumValue)/parseInt(secondNumValue);
                break;
            default:
                output.value = "Result";
        }
    }
}

function CreateAndAppendButtons(eachButton){
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("button-el");
    buttonEl.id = "button"+eachButton;
    buttonEl.textContent = eachButton;
    buttonEl.value = eachButton;
    buttonEl.addEventListener("click",function(){
        calculator(eachButton);
    })
    buttonsContainer.appendChild(buttonEl);
}

buttonsList.map(eachButton => CreateAndAppendButtons(eachButton))