let array = [];
let result, value, operator, findIndex, operatorChoice;

console.log('Please use only one operator at a time')

const calculText = document.querySelector('.calcul-text');
function displayCalcul() {
    takeOfComma = array.join(' ');
    calculText.textContent = takeOfComma;
}

function pushArray() {
    array.push(value);
    console.log(array);
    displayCalcul();
}

const operatorButtons = document.querySelectorAll('.operator-section > button');
operatorButtons.forEach(button => { // loop through all buttons
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case '+':
                value = '+'; // define value to push in the array
                operatorChoice = 'addition'; // define to let know which type of operation the user choised
                pushArray(value);
                break;
            case '-':
                value = '-';
                operatorChoice = 'subtraction';
                pushArray(value);
                break;
            case '/':
                value = '/';
                operatorChoice = 'division';
                pushArray(value);
                break;
            case '*':
                value = '*';
                operatorChoice = 'multiplication';
                pushArray(value);
                break;
        }
    })
})

const operandButtons = document.querySelectorAll('.operand-section > button');
operandButtons.forEach(button => { // loop through all buttons
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case '1':
                value = '1'; // define value to push in the array
                pushArray(value);
                break;
            case '2':
                value = '2'; 
                pushArray(value);
                break;
            case '3':
                value = '3';
                pushArray(value);
                break;
            case '4':
                value = '4'; 
                pushArray(value);
                break;
            case '5':
                value = '5';
                pushArray(value);
                break;
            case '6':
                value = '6'; 
                pushArray(value);
                break;
            case '7':
                value = '7';
                pushArray(value);
                break;
            case '8':
                value = '8'; 
                pushArray(value);
                break;
            case '9':
                value = '9'; 
                pushArray(value);
                break;
            case '.':
                value = '.';
                pushArray(value);
                break;
            case '0':
                value = '0'; 
                pushArray(value);
                break;
        }
    })
})


function displayAlert(error) {
    if (error === 'arrayNil') {
        alert('Please insert at least one operator and two operands')
    } else if (error === 'operator missing')  {
        alert('Please use at least one operator');
    } // add for other error
}

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', function() {
    if (array.length === 0) {
        displayAlert('arrayNil');
    } else if (operatorChoice === 'addition') { // look for the operator in order to run the correct function assiociated
        sum();
    } else if (operatorChoice === 'subtraction') {
        sub();
    } else if (operatorChoice === 'division') {
        div();
    } else if (operatorChoice === 'multiplication') {
        mul();
    } else {
        result = 'Operator missing'; /* need to remove after*/
        displayAlert('operator missing');
    }
    lastCalculDisplay()
    resultDisplay()
    array = [];
})

function sliceBeforeOp() {
    let filtered = array.slice(0,findIndex);
    console.log(filtered);
    
    leftValue =+ filtered.join('');
    console.log(leftValue);
}

function sliceAfterOp() {
    let indexLeft = findIndex + 1;
    let filtered = array.slice(indexLeft);
    console.log(filtered);

    rightValue =+ filtered.join('');
    console.log(rightValue);
}

function sum() {
    findIndex = array.indexOf('+');
    sliceBeforeOp();
    sliceAfterOp();
    let sum = leftValue + rightValue;
    result = Math.round((sum + Number.EPSILON) * 100) / 100;
    return result;
}

function sub() {
    findIndex = array.indexOf('-');
    sliceBeforeOp();
    sliceAfterOp();
    let sub = leftValue - rightValue;
    result = Math.round((sub + Number.EPSILON) * 100) / 100;
    return result;
}

function div() {
    findIndex = array.indexOf('/');
    sliceBeforeOp();
    sliceAfterOp();
    let div = leftValue / rightValue;
    result = Math.round((div + Number.EPSILON) * 100) / 100;
    return result;
}

function mul() {
    findIndex = array.indexOf('*');
    sliceBeforeOp();
    sliceAfterOp();
    let mult = leftValue * rightValue;
    result = Math.round((mult + Number.EPSILON) * 100) / 100;
    return result;
}

const resultText = document.querySelector('.result-text');
function resultDisplay() {
    resultText.textContent = `= ${result}`;
}

// const calculText = document.querySelector('.calcul-text');
// function calculDisplay() {
//     takeOfComma = array.join(' ');
//     calculText.textContent = takeOfComma;
// }

const pastCalculText = document.querySelector('.past-calcul-text'); // show past result not past calcul
function lastCalculDisplay() {
    takeOfComma = array.join(' ');
    pastCalculText.textContent = `${takeOfComma}`;
}

/*  Calculator with basic functions
    4 operators + - / * 
    the operations should take 3 variables, values and operator
    when we click the value should be return to our operate
    need to find how we can set the first value and the second value
    currently overwritten
    look to save some lines => cleaner
    add a func to clean each time we pass to another calc
    Need to :
        restrict to one operator/decimal point at a time
        don't accept value if there are alone 
        add a backspace button
        put the first value as 0*/
