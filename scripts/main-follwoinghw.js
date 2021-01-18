// Define a function named pushNumber that alert()s the number associated with its event argument when called; add this function as an event listener for the number buttons
// Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; add this function as an event listener for the operator buttons
// Define a function named calculate that alerts() = when pressed; add this function as an event listener for the = button
// Define a variable calculation pointing to an empty array
// Using Array.prototype.push, perform actions on the calculation variable when numbers and operators are pressed
// Using a for loop, alert() the calculation when = is pressed



const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');

let calculation = [];
let num1;
let num2;
let result;
let operator;
let display = document.querySelector('.calculator-screen');

// Define a function named pushNumber that alert()s the number associated with its event argument when called; add this function as an event listener for the number buttons
function pushNumber() {
	num1 = event.target.value;
	calculation.push(num1)
	console.log(calculation);
};
numberBtn.forEach(function(e){
	e.addEventListener('click', pushNumber);
});

// Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; add this function as an event listener for the operator buttons
function pushOperator() {
	operator = event.target.value;
	operator.push(num1)
	alert(operator);
};
operatorBtn.forEach(function(e){
	e.addEventListener('click', pushOperator);
});

// Define a function named calculate that alerts() = when pressed; add this function as an event listener for the = button

function calculate() {
for (var i = 0; i < calculation.length; i++) {
	console.log(calculation[i]);
}
};
equalSign.addEventListener('click', calculate);
