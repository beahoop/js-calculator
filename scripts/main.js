let num1;
let num2;
let operator;
//letting a mutable varible be set but not defined allows me to add target vaules with funcations later
//once num1
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
    //adding in the eventlister so the buttons will respond to the user's actions and show in the cal screen
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

function OpsAction() {
    let number = calDisplay.value
    //setting a mutable varible to display in the cal-screen
    if (operator === undefined) {
      //the condition is if the operator strictly equals undefine
        num1 = parseFloat(number)
        //let num1 (which we set at the top) now equal a paresfloat of what is display in the cal display
        console.log(typeof (num1))
        //being sure now that num1 is coming back as a number and not a string or anything else
    } else if (num1 !== null && operator !== undefined) {
      //IF operator is NOT strictly undefined then if num1 is strictly not null AND operator is NOT strictly undefined
      //make num2 a number type and display in it the cal-display
        num2 = parseFloat(number)
    }
}
numValues.forEach(function (e) {
  //using a for loop to go over each button that has a class of numbers and adding this eventlistener to it
    e.addEventListener('click', OpsAction)
    //telling the event to listener to listen for a click and then produce with the OpsAction function
});


function calculate() {
  //this function will preform the actual math of the calculator
  //it will will be a call back function for the click event of the equal signs
  // aka it will only fire when the equal sign has been click
  //below it is a if/else statment going over the 4 operators we are using
    if (operator === '+') {
      //condition IF operator strictly equals the string of '+' then do this
        let result = num1 + num2
        console.log(result);
        //setting a mutable varible so it may change with each operator and be stored
        //as the new num1, allowing the user to do more than one equation
        calDisplay.value = result;
        //now the cal-display will show the result
        num1 = result
    } else if (operator === '-') {
      //
        let result = num1 - num2
        calDisplay.value = result;
        num1 = result
    } else if (operator === '/') {
        let result = num1 / num2
        calDisplay.value = result;
        num1 = result
    } else if (operator === '*') {
        let result = num1 * num2
        calDisplay.value = result;
        num1 = result
    }
}
const bEqual = document.querySelector('.equal-sign');
bEqual.addEventListener("click", calculate);
//this will listen for the user's cilck on the equal sign button the do the calculate function

function clear() {
	//this function will clear all stored data for the following varible
  //allowing the user to start fresh and NOT conintue with the same 1st equation
    calDisplay.value = 0;
		num1 = null;
    num2 = null;
    operator = undefined;
}
const bClear = document.querySelector('.clear');
bClear.addEventListener("click", clear);
//this will listen for the user's cilck on the equal sign button the do the clear function
