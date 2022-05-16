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

digitsBtns.forEach(digit => {
  digit.addEventListener('click', () => {
    if(displayNumber.length <= 14) {
    displayNumber += digit.innerText;
    display.innerText = displayNumber;
    }
  });
});

pointBtn.addEventListener('click', () => {
  if(!displayNumber.includes('.')) displayNumber += '.';
});

deleteBtn.addEventListener('click', deleteB);
clearBtn.addEventListener('click', clearAll);

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