const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (a / b) ;

const operate = (operator,a,b) => {
    if (operator == "plus")return add(a,b);
    if (operator == "minus")return substract(a,b);
    if (operator == "times")return multiply(a,b);
    if (operator == "obelus")return divide(a,b);
}

const expression = document.querySelector('.expression');
const displayables = document.querySelectorAll('.operator, .number');
const backspace = document.querySelector('#backspace');
const clearButton = document.querySelector('#clear');

//listen to numbers and operators buttons
let displayValue = expression.textContent ;
displayables.forEach(button => {
    button.addEventListener('click', () => {
        displayValue += button.textContent;
        
        updateScreen();
    })
})


backspace.addEventListener('click', removeLast);


function updateScreen() {
    expression.textContent = displayValue;
    return displayValue;
}

function clear() {
    displayValue = "";
    console.log('clear function : launched');
    return updateScreen();
}
function removeLast() {
   let testValue = displayValue.slice(0,-1);
   displayValue =testValue;
    console.log(testValue);
    return updateScreen();
}


// store display value to a string variable called displayValue
//make appear display value 
