const displayDiv = document.querySelector('#display');
let stringDisplay = "";
const buttons = document.querySelectorAll('button');
let operator = '';
let firstNum = null;
let secondNum = null;

function display(string){
    displayDiv.textContent = string;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className === 'number'){
            stringDisplay += button.id;
            display(stringDisplay);
        };
        if (button.className === 'operator'){
            if (firstNum === null){
                firstNum = Number(stringDisplay)

                display(firstNum);
            }

            else if (secondNum === null){
                secondNum = Number(stringDisplay)
                
                let result = operate(operator, firstNum, secondNum);
                display(Math.round((result + Number.EPSILON) * 100) / 100);
                firstNum = result;
                secondNum = null;
            }
            operator = button.id;
            stringDisplay = '';
        }
        if (button.id === "clear"){
            stringDisplay = '';
            display("0");
            firstNum = null;
            secondNum = null;
        }
    })
})



function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0) return "ERROR" 
    return a / b;
}

function operate(operator, a, b){
    switch (operator) {
        case "+": return add(a,b)
        case "-": return subtract(a,b)
        case "*": return multiply(a,b)
        case "/": return divide(a,b)
        case "=": return a
    }
}

