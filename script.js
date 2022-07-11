const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const pointBtn = document.getElementById('point');
const equalBtn = document.getElementById('equal');

const digitsBtns = document.querySelectorAll('.digits');
const operatorBtns = document.querySelectorAll('.operators');

let displayNumber = '';
let num1 = '';
let num2 = '';
let op = '';

digitsBtns.forEach(d => d.addEventListener('click', () => digBtnsActions(d)));

operatorBtns.forEach(b => b.addEventListener('click', () => opBtnActions(b)));

equalBtn.addEventListener('click', equalBtnActions);

pointBtn.addEventListener('click', enterDecimalPoint);

deleteBtn.addEventListener('click', deleteB);

clearBtn.addEventListener('click', clearAll);

function enterNumber(digit) {
  if (displayNumber.charAt() === 'Z') return;
  if(displayNumber.length <= 14) {
  displayNumber += digit.textContent;
  display.innerText = displayNumber;
  }
  console.log(displayNumber);
}

function digBtnsActions(dig) {
  if (displayNumber.charAt() === 'Z') return;
  if (num1) {
    num2 = num1;
    num1 = '';
    displayNumber = '';
    enterNumber(dig);
  } else enterNumber(dig);
}

function enterDecimalPoint() {
  if(!displayNumber.includes('.')) displayNumber += '.';
}

function clearAll() {
  display.innerText = '0';
  displayNumber = '';
  num1 = '';
  num2 = '';
  op = '';
}

function deleteB() {
  if (displayNumber.charAt() === 'Z') return;
  if(displayNumber.length) {
    displayNumber = displayNumber.slice(0, -1);
    if(!displayNumber.length) display.innerText = '0';
    else display.innerText = displayNumber;
  }
}

function equalBtnActions() {
  if (displayNumber.charAt() === 'Z') return;
  if (op) {
    if (num2 && num1) {
      operate(op, num2, num1);
      op = '';
    } else if (!num1 && displayNumber) {
      operate(op, num2, displayNumber);
      op = '';
    }
  }
}

function opBtnActions(btn) {
  if (!op) op = btn.textContent;
  if (displayNumber) {
    num1 = displayNumber;
  }
  console.log(op);
  if (num2) {
    operate(op, num2, num1);
    op = btn.textContent;
    console.log(op);
    num1 = displayNumber;
  }
}

function addition(a, b) {
  return +a + +b;
}

function subtraction(a, b) {
  return +a - +b;
}

function product(a, b) {
  return +a * +b;
}

function division(a, b) {
  if (!+b) return 'Zero div Err, press clear';
  return +a / +b;
}

function operate(operator, a, b) {
  if(operator === '+') displayNumber = `${addition(a, b)}`;
  if(operator === '-') displayNumber = `${subtraction(a, b)}`;
  if(operator === '*') displayNumber = `${product(a, b)}`;
  if(operator === '/') displayNumber = `${division(a, b)}`;
  num1 = '';
  num2 = '';
  display.innerText = displayNumber;
}