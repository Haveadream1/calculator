let array = [];
let result, value, operator, findIndex, operatorChoice;

console.log('Please use only one operator at a time')

function pushArray() {
    array.push(value);
    console.log(array);
    calculDisplay();
}

const sumButton = document.querySelector('.sum-button');
sumButton.addEventListener('click', function() {
    operatorChoice = 1;
    value = '+';
    pushArray();
    return array, value, operatorChoice;
});

const subButton = document.querySelector('.sub-button');
subButton.addEventListener('click', function() {
    operatorChoice = 2
    value = '-'
    pushArray();
    return array, value, operatorChoice;
});

const divButton = document.querySelector('.div-button');
divButton.addEventListener('click', function() {
    operatorChoice = 3;
    value = '/';
    pushArray();
    return array, value, operatorChoice;
});

const mulButton = document.querySelector('.mul-button');
mulButton.addEventListener('click', function() {
    operatorChoice = 4;
    value = '*';
    pushArray();
    return array, value, operatorChoice;
}); 

const one = document.querySelector('.one');
one.addEventListener('click', function() {
    value = 1;
    pushArray();
    return array;
});

const two = document.querySelector('.two');
two.addEventListener('click', function() {
    value = 2;
    pushArray();
    return array;
});

const three = document.querySelector('.three');
three.addEventListener('click', function() {
    value = 3;
    pushArray();
    return array;
});

const four = document.querySelector('.four');
four.addEventListener('click', function() {
    value = 4;
    pushArray();
    return array;
});

const five = document.querySelector('.five');
five.addEventListener('click', function() {
    value = 5;
    pushArray();
    return array;
});

const six = document.querySelector('.six');
six.addEventListener('click', function() {
    value = 6;
    pushArray();
    return array;
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', function() {
    value = 7;
    pushArray();
    return array;
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', function() {
    value = 8;
    pushArray();
    return array;
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', function() {
    value = 9;
    pushArray();
    return array;
});

const decimalPoint = document.querySelector('.decimal-point');
decimalPoint.addEventListener('click', function() {
    value = '.';
    pushArray();
    return array;
})

const zero = document.querySelector('.zero');
zero.addEventListener('click', function() {
    value = 0;
    pushArray();
    return array;
})

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', function() {
    if(operatorChoice === 1) {
        sum();
    } else if(operatorChoice === 2) {
        sub();
    } else if(operatorChoice === 3) {
        div();
    } else if(operatorChoice === 4) {
        mul();
    } else {
        result = 'Operator missing';
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

const calculText = document.querySelector('.calcul-text');
function calculDisplay() {
    takeOfComma = array.join(' ');
    calculText.textContent = takeOfComma;
}

const pastCalculText = document.querySelector('.past-calcul-text');
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