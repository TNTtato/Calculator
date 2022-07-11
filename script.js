const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const pointBtn = document.getElementById('point');
const equalBtn = document.getElementById('equal');

const digitsBtns = document.querySelectorAll('.digits');
const operatorBtns = document.querySelectorAll('.operators');

let displayNumber = '';
let countClick = 0;
let num1 = '';
let num2 = '';

digitsBtns.forEach(d => d.addEventListener('click', () => enterNumber(d)));

pointBtn.addEventListener('click', enterDecimalPoint);

deleteBtn.addEventListener('click', deleteB);

clearBtn.addEventListener('click', clearAll);

function enterNumber(digit) {
  if(displayNumber.length <= 14) {
  displayNumber += digit.textContent;
  display.innerText = displayNumber;
  }
}
// add
function digBtnsActions(dig) {
  if (num1) {
    displayNumber = '';
    enterNumber(dig);
  }
}
// *add
function enterDecimalPoint() {
  if(!displayNumber.includes('.')) displayNumber += '.';
}

function clearAll() {
  display.innerText = '0';
  displayNumber = '';
  num1 = '';
  num2 = '';
}

function deleteB() {
  if(displayNumber.length) {
    displayNumber = displayNumber.slice(0, -1);
    if(!displayNumber.length) display.innerText = '0';
    else display.innerText = displayNumber;
  }
}
// add
function opBtnActions() {
  if (displayNumber !== '') {
    num1 = displayNumber;
  } 
}
// *add
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if(operator === '+') displayNumber = `${addition(a, b)}`;
  if(operator === '-') displayNumber = `${subtraction(a, b)}`;
  if(operator === '*') displayNumber = `${product(a, b)}`;
  if(operator === '/') displayNumber = `${division(a, b)}`;
}