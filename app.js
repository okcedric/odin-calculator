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