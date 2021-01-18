// Define a function named pushNumber that alert()s the number associated with its event argument when called; add this function as an event listener for the number buttons
// Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; add this function as an event listener for the operator buttons
// Define a function named calculate that alerts() = when pressed; add this function as an event listener for the = button
// Define a variable calculation pointing to an empty array
// Using Array.prototype.push, perform actions on the calculation variable when numbers and operators are pressed
// Using a for loop, alert() the calculation when = is pressed



const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalSignBtn = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.clear');

let calculation = [];
let num1 = null;
let num2;
let result;
let operator;
let display = document.querySelector('.calculator-screen');

// Define a function named pushNumber that alert()s the number associated with its event argument when called; add this function as an event listener for the number buttons
// function pushNumber() {
// 	num1 = event.target.value;
// 	calculation.push(num1)
// 	display.value = num1;
// 	console.log(num1);
// };
console.log(num1);

function pushNumber(){
if(operator == undefined) {
	num1 = event.target.value;
	num1 = parseFloat(num1)
	num2 = null;
	calculation.push(num1)
	display.value = num1;
	console.log(num1);
}	else if(num1 !== null && operator !== undefined)
num1 = num1;
num2 = event.target.value;
num2 = parseFloat(num2)
calculation.push(num2)
display.value = num2;
console.log(typeof(num2));
}

numberBtn.forEach(function(e){
	e.addEventListener('click', pushNumber);
});



// Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; add this function as an event listener for the operator buttons
function pushOperator() {
	operator = event.target.value;
	calculation.push(operator);
	display.value = operator;
};
operatorBtn.forEach(function(e){
	e.addEventListener('click', pushOperator);
});

// Define a function named calculate that alerts() = when pressed; add this function as an event listener for the = button

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
        display.value = result;
				console.log(result);
        //now the cal-display will show the result
        num1 = result
    } else if (operator === '-') {
      //
        let result = num1 - num2
        display.value = result;
        num1 = result
    } else if (operator === '/') {
        let result = num1 / num2
        display.value = result;
        num1 = result;
    } else if (operator === '*') {
        let result = num1 * num2
        display.value = result;
        num1 = result;
    }
		console.log(calculation);
}
const bEqual = document.querySelector('.equal-sign');
bEqual.addEventListener("click", calculate);


// function calculate() {
// for (var i = 0; i < calculation.length; i++) {
// 	console.log(calculation[i]);
// }
// };
// equalSignBtn.addEventListener('click', calculate);

function clickClear() {
	num1 = null;
	num2 = null;
	calculation = [];
	result = null;
	operator = null;
	display.value = '0';
	console.log(calculation);
}
clearBtn.addEventListener('click', clickClear);
