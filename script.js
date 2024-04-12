function add(firstsNumber, secondNumber) {
    return firstsNumber + secondNumber;
}
function subtract(firstsNumber, secondNumber) {
    return firstsNumber - secondNumber;
}
function multiply(firstsNumber, secondNumber) {
    return firstsNumber * secondNumber;
}
function divide(firstsNumber, secondNumber) {
    return firstsNumber / secondNumber;
}

let firstsNumber = 3;
let operator = "+";
let secondNumber = 5;

function operate(operator,firstsNumber,secondNumber) {
    if (operator == "+") {
        return add(firstsNumber,secondNumber);
    }
}

const operand = document.getElementById("operand");
document.getElementById("btn-c").addEventListener("click", function() {
    operand.innerText = "0";
    
});
const number = document.querySelectorAll(".number");
number.forEach(number => {
    number.addEventListener("click", function(event) {
        const btn = event.target.id; // Get the ID of the clicked button
        if (operand.innerText == "0") {
            operand.innerText = "";
        }
        const i = btn[4]
        operand.innerText += i;
    });
});
