let num1;
let num2;
let operator;
//letting a mutable varible be set but not defined allows me to add target vaules with funcations later
let calDisplay = document.querySelector('.calculator-screen');
//targeting the calculator's screen for easier ref
//setting this as mutable varible to be able to manipulate this later

const numberButtons = document.querySelectorAll('.number');
//using a constant varible so this can't change by accidenct
//defining a select group buttons as numbers
function setNumsVal(e) {
    if (calDisplay.value == '' || calDisplay.value == 0) {
      //setting the number value in the calculator screen
      //if the calscreen vaule is an empty string OR 0 (meaning as long as one of these are true)
      //then do this v
        calDisplay.value = e.target.value
      //target the calculator screen and now show the number button the user click's object value in the screen
    } else {
      //if EITHER of the conditions are true then do this v
        calDisplay.value = calDisplay.value + e.target.value;
        //target the calculator screen and show the what is already there plus the new number button the user clicked
    }
}
numberButtons.forEach(function (btn) {
    btn.addEventListener('click', setNumsVal)
    //adding in the eventlister so the buttons will respond to the user's actions
});

let operators = document.querySelectorAll('.operator');
//using a mutable varible so we can store a change data later
//selecting all the button's that would be consider an operator
function setOpsVal(event) {
		let operatorValue = event.target.value;

		operator = operatorValue;
		calDisplay.value = ''
    //this will not display any of the operator signs to the user
	};
operators.forEach(function (btn) {
    btn.addEventListener('click', setOpsVal)
});

const numValues = document.querySelectorAll('.number');

numValues.forEach(function (e) {
    e.addEventListener('click', function () {
        let number = calDisplay.value
        if (operator === undefined) {
            num1 = parseFloat(number)
            console.log(typeof (num1))
        } else if (num1 !== null && operator !== undefined) {
            num2 = parseFloat(number)
        }
    })
});


function calculate() {
    if (operator === '+') {
        let result = num1 + num2
        document.querySelector('.calculator-screen').value = +result.toFixed(3);
        num1 = result
    } else if (operator === '-') {
        let result = num1 - num2
        document.querySelector('.calculator-screen').value = +result.toFixed(3);
        num1 = result
    } else if (operator === '/') {
        let result = num1 / num2
        document.querySelector('.calculator-screen').value = +result.toFixed(3);
        num1 = result
    } else if (operator === '*') {
        let result = num1 * num2
        document.querySelector('.calculator-screen').value = +result.toFixed(3);
        num1 = result
    }
}
const bEqual = document.querySelector('.equal-sign');
bEqual.addEventListener("click", calculate);

function clickClear() {
	// console.log("Hey");
    calDisplay.value = 0;
		num1 = null;
    num2 = null;
    operator = undefined;
}
const bClear = document.querySelector('.clear');
bClear.addEventListener("click", clickClear);
