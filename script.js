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