const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const pointBtn = document.getElementById('point');

/* const plusSign = document.getElementById('plus');
const minusSign = document.getElementById('minus');
const productSign = document.getElementById('product');
const divisionSign = document.getElementById('division'); */

const digitsBtns = document.querySelectorAll('.digits');
const operatorBtns = document.querySelectorAll('.operators');

let displayNumber = '';
let digitClicked = false;
let operatorClicked = false;

digitsBtns.forEach(digit => {
  digit.addEventListener('click', () => {
    if(displayNumber.length <= 14) {
    displayNumber += digit.innerText;
    display.innerText = displayNumber;
    digitClicked = true;
    operatorClicked = false;
    }
  });
});

pointBtn.addEventListener('click', () => {
  if(!displayNumber.includes('.')) displayNumber += '.';
});

deleteBtn.addEventListener('click', () => {
  if(displayNumber.length) {
    displayNumber = displayNumber.slice(0, -1);
    if(!displayNumber.length) display.innerText = '0';
    else display.innerText = displayNumber;
  }
});

