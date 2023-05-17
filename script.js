/*
const plus = document.querySelector('.plus');
plus.addEventListener('click', function() {
    operator = '+';
});

const minus = document.querySelector('.minus');
minus.addEventListener('click');

const division = document.querySelector('.division');
division.addEventListener('click');

const multiplication = document.querySelector('.multiplication');
multiplication.addEventListener('click');
//
const one = document.querySelector('.one');
one.addEventListener('click', function() {
    value = 1;
});

const two = document.querySelector('.two');
two.addEventListener('click', function() {
    value  = 2;
});

const three = document.querySelector('.three');
three.addEventListener('click');

const four = document.querySelector('.four');
four.addEventListener('click');

const five = document.querySelector('.five');
five.addEventListener('click');

const six = document.querySelector('.six');
six.addEventListener('click');

const seven = document.querySelector('.seven');
seven.addEventListener('click');

const eight = document.querySelector('.eight');
eight.document.addEventListener('click');

const nine = document.querySelector('.nine');
nine.addEventListener('click');
*/
//
let value;
let operator;
let array = [];
let result;

const plusButton = document.querySelector('.plus');
plusButton.addEventListener('click', function() {
    operator = '+';
    console.log(operator);
    //array.push(operator);
    //console.log(array);
});

//push into an array take the element in order of creation
const one = document.querySelector('.one');
one.addEventListener('click', function() {
    value = 1;
    array.push(value);
    console.log(array);
});

const two = document.querySelector('.two');
two.addEventListener('click', function() {
    value = 2;
    array.push(value);
    console.log(array);
});
const four = document.querySelector('.four');
four.addEventListener('click', function() {
    value = 4;
    array.push(value);
    console.log(array);
});

// call the func in operate
function sumFunction() {
    result = array.reduce((sum, current) => sum + current, 0);
}

function differenceFunction() {
    resultToConvert = array.reduce((sum, current) => current - sum , 0);
    if(resultToConvert < 0) {
        result = Math.abs(resultToConvert);
    } else if(resultToConvert > 0) {
        result = -Math.abs(resultToConvert);
    } else if(resultToConvert === 0) {
        result = resultToConvert;
    }
}

//doesn4t work
function divisionFunction() {
    result = array.reduce((sum, current) => sum / current , 1);
}

function multiplicationFunction() {
    result = array.reduce((sum, current) => sum * current, 1);
}

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', function() {
    console.log(result);
})

function operate() {
    console.log(`${value} ${operator} ${value}`);
}
operate();
/*  Calculator with basic functions
    4 operators + - / * 
    the operations should take 3 variables, values and operator
    when we click the value should be return to our operate
    need to find how we can set the first value and the second value
    currently overwritten
*/