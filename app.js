const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (a / b) ;

const operate = (operator,a,b) => {
    if (operator == "+")return add(a,b);
    if (operator == "-")return substract(a,b);
    if (operator == "×")return multiply(a,b);
    if (operator == "÷")return divide(a,b);
    console.log(operator + " is not a good operator");
}

const expression = document.querySelector('.expression');
const answerText = document.querySelector('.answer');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const backspace = document.querySelector('#backspace');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');

//listen to numbers and operators buttons
let displayValue = expression.textContent ;
let firstNumber = 0;
let secondNumber = "" ;
let answer = 0;
let operator= "";

numbers.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.textContent;
        updateScreen();
    })
})

operators.forEach(button => {
    button.addEventListener('click', () => {

        if(firstNumber) {
            calculate();
            operator = button.textContent;
        }else {
            firstNumber = parseInt(displayValue);
            operator = button.textContent;
            console.log(firstNumber + ": first Number in")
        }
        displayValue += operator;
        updateScreen();
    })
})

equalsButton.addEventListener('click', () => {
    if (firstNumber) {
        calculate();
        updateScreen();
    }

});

backspace.addEventListener('click', removeLast);
clearButton.addEventListener('click',clear);

function findPosition(arr,char){
    for (let i = 0; i < arr.length; i++ ) {
        if(arr[i] === char) return i;
    }
    return 'Error operator not found';
}

function updateScreen() {
    expression.textContent = displayValue;
    answerText.textContent = answer;
    return displayValue;
}

function clear() {
    displayValue = "";
    firstNumber = 0;
    secondNumber= 0;
    answer = 0;

    return updateScreen();
}
function removeLast() {
    displayValue = displayValue.slice(0,-1);
    answer=displayValue;
    return updateScreen();
}

function calculate() {
        console.log('calculation\'s happenning')
        //copy display value to a working array
        let operatorPosition = findPosition(Array.from(displayValue), operator);
        //find position of the operator
        let secondNumber = parseInt(displayValue.slice(operatorPosition + 1, displayValue.length));
        if (secondNumber) {
            answer = operate(operator, firstNumber, secondNumber);
            displayValue = " "+answer;
            firstNumber = 0;
            secondNumber = 0;
        }
        //take all the string after the operator transform them to numbers and store it in secondNumber
        // If secondNumber is not empty
        //oparate and store it in answer
        // change displayValue to answer
    }


