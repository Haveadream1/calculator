let value;
let operator;
let array = [];
let result;
let findIndex;
let x;

const sumButton = document.querySelector('.sum-button');
sumButton.addEventListener('click', function() {
    x = 1;
    operator = '+';
    console.log(operator);
    array.push(operator);
    console.log(array);
    return array, operator, x;
});

const subButton = document.querySelector('.sub-button');
subButton.addEventListener('click', function() {
    x = 2
    operator = '-';
    console.log(operator);
    array.push(operator);
    console.log(array);
    return array, operator, x;
});

const divisionButton = document.querySelector('.division-button');
divisionButton.addEventListener('click', function() {
    x = 3;
    operator = '/';
    console.log(operator);
    array.push(operator);
    console.log(array);
    return array, operator, x;
});

const multiplicationButton = document.querySelector('.multiplication-button');
multiplicationButton.addEventListener('click', function() {
    x = 4;
    operator = '*';
    console.log(operator);
    array.push(operator);
    console.log(array);
    return array, operator, x;
}); 

// create a func to take off the + line like console and push, displays html
const one = document.querySelector('.one');
one.addEventListener('click', function() {
    value = 1;
    array.push(value);
    console.log(array);
    return array;
});

const two = document.querySelector('.two');
two.addEventListener('click', function() {
    value = 2;
    array.push(value);
    console.log(array);
    return array;
});

const three = document.querySelector('.three');
three.addEventListener('click', function() {
    value = 3;
    array.push(value);
    console.log(array);
    return array;
});

const four = document.querySelector('.four');
four.addEventListener('click', function() {
    value = 4;
    array.push(value);
    console.log(array);
    return array;
});

const five = document.querySelector('.five');
five.addEventListener('click', function() {
    value = 5;
    array.push(value);
    console.log(array);
    return array;
});

const six = document.querySelector('.six');
six.addEventListener('click', function() {
    value = 6;
    array.push(value);
    console.log(array);
    return array;
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', function() {
    value = 7;
    array.push(value);
    console.log(array);
    return array;
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', function() {
    value = 8;
    array.push(value);
    console.log(array);
    return array;
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', function() {
    value = 9;
    array.push(value);
    console.log(array);
    return array;
});

const decimalPoint = document.querySelector('.decimal-point');
decimalPoint.addEventListener('click', function() {
    value = '.';
    array.push(value);
    console.log(array);
    return array;
})

const zero = document.querySelector('.zero');
zero.addEventListener('click', function() {
    value = 0;
    array.push(value);
    console.log(array);
    return array;
})

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', function() {
    console.log(result);
    if(x === 1) {
        sum();
    } else if(x === 2) {
        sub();
    } else if(x === 3) {
        divide();
    } else if(x === 4) {
        multi();
    } else {
        console.log('Specify an operator');
    }
})
/////////////////////////////////////////////////////////////////////
function convertValueO() {
    let filtered = array.slice(0,findIndex);
    console.log(filtered);
    resultValueO = +filtered.join('');
    console.log(resultValueO);
}

function convertValueT() {
    let findIndexT = findIndex + 1;
    let filtered = array.slice(findIndexT);
    console.log(filtered);
    resultValueT = +filtered.join('');
    console.log(resultValueT);
}

function sum() {
    findIndex = array.indexOf('+');
    convertValueO();
    convertValueT();
    let sum = resultValueO + resultValueT;
    let resultSum = Math.round((sum + Number.EPSILON) * 100) / 100
    console.log(`The result of addition is ${resultSum}`);
}

function sub() {
    findIndex = array.indexOf('-');
    convertValueO();
    convertValueT();
    let sub = resultValueO - resultValueT;
    let resultSubs = Math.round((sub + Number.EPSILON) * 100) / 100
    console.log(`The result of subtraction is ${resultSubs}`);
}

function divide() {
    findIndex = array.indexOf('/');
    convertValueO();
    convertValueT();
    let divide = resultValueO / resultValueT;
    let resultDivide = Math.round((divide + Number.EPSILON) * 100) / 100
    console.log(`The result of division is ${resultDivide}`);
}

function multi() {
    findIndex = array.indexOf('*');
    convertValueO();
    convertValueT();
    let multi= resultValueO * resultValueT;
    let resultMulti = Math.round((multi + Number.EPSILON) * 100) / 100
    console.log(`The result of multiplication is ${resultMulti}`);
}
///////////////////////////////////////////////////////////////////////////////
const container = document.querySelector('.container-result');
const textDisplay = document.querySelector('.text-display');
textDisplay.textContent = ;

/*
function operate() {
    console.log(`${value} ${operator} ${value}`);
}
operate();
let filtered = array.filter(function(x) {return x <= findIndex;});

/*  Calculator with basic functions
    4 operators + - / * 
    the operations should take 3 variables, values and operator
    when we click the value should be return to our operate
    need to find how we can set the first value and the second value
    currently overwritten
    look to save some lines => cleaner
    add a func to clean each time we pass to another calc
    need to restrict to one operator at a time
*/