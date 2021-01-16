
// const buttonNum = document.querySelectorAll('.number');

const buttonClear = document.querySelector('.clear');
// const buttonPlusMinus = document.querySelector('.plus-minus');
// const buttonPercent = document.querySelector('.percent');
// const buttonOzero = document.querySelector('.number btn-lg');
// const buttonDecimal = document.querySelector('.decimal');
// const buttonEqual = document.querySelector('.equal-sign');
let calDisplay = document.querySelector('.calculator-screen');


// buttonNum.forEach(function (btn) {
// 	btn.addEventListener('click', function)
//
// }
//
//
//
//
//
//
//
//
//
//
// let calculation = [];
//
// for (var i = 0; i < buttonNum.length; i++) {
// 	buttonNum[i].addEventListener
// }
//
// for (var i = 0; i < buttonOperator.length; i++) {
// 	buttonNum[i]
// }
/////////////
// function addition(a, b) {
//
// 	if(typeof a === 'undefined'){
// 		throw new Error('Parameter "a" not set!');
// 	}
// 	if(typeof b === 'undefined'){
// 		throw new Error('Parameter "b" not set!');
// 	}
//
// 	a = new Big(a);
//
// 	return Number(a.plus(b).toPrecision(10));
//
// }
//
// function subtraction(a, b) {
//
// 	if(typeof a === 'undefined'){
// 		throw new Error('Parameter "a" not set!');
// 	}
// 	if(typeof b === 'undefined'){
// 		throw new Error('Parameter "b" not set!');
// 	}
//
// 	a = new Big(a);
//
// 	return Number(a.minus(b).toPrecision(10));
//
// }
//
// function division(a, b) {
//
// 	if(typeof a === 'undefined'){
// 		throw new Error('Parameter "a" not set!');
// 	}
// 	if(typeof b === 'undefined'){
// 		throw new Error('Parameter "b" not set!');
// 	}
// 	if(b === 0){
// 		throw new Error('Not even God can divide by 0!');
// 	}
//
// 	a = new Big(a);
//
// 	return Number(a.div(b).toPrecision(10));
//
// }
//
// function multiplication(a, b) {
//
// 	if(typeof a === 'undefined'){
// 		throw new Error('Parameter "a" not set!');
// 	}
// 	if(typeof b === 'undefined'){
// 		throw new Error('Parameter "b" not set!');
// 	}
// 	a = new Big(a);
// 	return Number(a.times(b).toPrecision(10));
//
// }
////////////WHAT I JUST ADDED/////////////////////
let num1;
let num2;
let operator;

const numberButtons = document.querySelectorAll('.number');
function setNumsVal(e) {
    calDisplay = document.querySelector('.calculator-screen')
    if (calDisplay.value == '' || calDisplay.value == 0) {
        calDisplay.value = e.target.value
    } else {
        calDisplay.value = calDisplay.value + e.target.value;
    }
}
numberButtons.forEach(function (btn) {
    btn.addEventListener('click', setNumsVal)
});

let operators = document.querySelectorAll('.operator');
function setOpsVal(event) {
		let operatorValue = event.target.value;
		operator = operatorValue;
		calDisplay.value = ''
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
    } else if (operator === 'x') {
        let result = num1 * num2
        document.querySelector('.calculator-screen').value = +result.toFixed(3);
        num1 = result
    }
}

function allClear() {
	//need to remove the onclick in the html and call it in here
    document.querySelector('.calculator-screen').value = '0'
    num1 = null;
    num2 = null;
    operator = undefined;
}

const buttonClear = document.querySelector('.clear');

///////////////////////eventlister//////////////////
//
// buttonNum.forEach(function(e){
//     e.addEventListener('click', pushNumber);
//   });
// buttonOperator.forEach(function(e){
//     e.addEventListener('click', pushOperator);
//   });

// buttonPlusMinus.forEach(function(e){
//     e.addEventListener('click', pushPlusMinus);
//   });
// buttonPercent.forEach(function(e){
//     e.addEventListener('click', pushPercent);
//   });
// buttonOzero.forEach(function(e){
//     e.addEventListener('click', pushOzero);
//   });
// buttonDecimal.forEach(function(e){
//     e.addEventListener('click', pushDecimal);
//   });
//
// buttonEqual.forEach(function(e){
//     e.addEventListener('click', pushEqual);
//   });
// ///////////////////////funcations//////////////////
//
// function clickClear() {
//   calDisplay.value = 0;
// }
// function pushNumber(event) {
//   if(calDisplay.value == "0") {
//     calDisplay.value = null;
//     calDisplay.value = (calDisplay.value + event.target.value);
//     calculation.push(event.target.value);
//     console.log(calculation);
//     } else {
//   calDisplay.value = (calDisplay.value + event.target.value);
//   calculation.push(event.target.value);
//   console.log(calculation);
//   }
//
//
// //array.push(value of the event that is a happenign to the event listener)
//
//
// }
// function pushOperator(event) {
//   if(calDisplay.value == "0") {
//     calDisplay.value = null;
//     calDisplay.value = (calDisplay.value + event.target.value);
//     calculation.push(event.target.value);
//     console.log(calculation);
//     } else {
//   calDisplay.value = (calDisplay.value + event.target.value);
//   calculation.push(event.target.value);
//   console.log(calculation);
//   }
// }
//
// function pushPlusMinus(event) {
//   if(calDisplay.value == "0") {
//     calDisplay.value = null;
//     calDisplay.value = (calDisplay.value + event.target.value);
//     } else {
//   calDisplay.value = (calDisplay.value + event.target.value);
//   }
// }
// function pushPercent(event) {
//   if(calDisplay.value == "0") {
//     calDisplay.value = null;
//     calDisplay.value = (calDisplay.value + event.target.value);
//     } else {
//   calDisplay.value = (calDisplay.value + event.target.value);
//   }
// }
// function pushOzero(event) {
//   if(calDisplay.value == "0") {
//     calDisplay.value = null;
//     calDisplay.value = (calDisplay.value + event.target.value);
//     } else {
//   calDisplay.value = (calDisplay.value + event.target.value);
//   }
// }
// function pushDecimal(event) {
//   if(calDisplay.value == "0") {
//     calDisplay.value = null;
//     calDisplay.value = (calDisplay.value + event.target.value);
//     } else {
//   calDisplay.value = (calDisplay.value + event.target.value);
//   }
// }
// //decimal should only show up once between 0.000 and not be allowed to
// //display in any other order
// //2.0 + 3 = tell it the cal it shouldn't keep the .0
// // dividing by 0 can't do this or NaN
//
//
//
//
//
//
//
// function pushEqual(event) {
//   calculation = calculation.join('');
//   calDisplay = eval(calculation);
//
// }
// //parseFloat this will turn a string into a number
// // const nums = '0123456789'-> needs to be a
// //
// // for (var i = 0; i < calculation.length; i++) {
// //   calculation[i]
//
//
// //   if(nums.includes(calculation[i])){
// //   }
// //
// // }
//
// //for loop we want it to go over array pick out numbers and operators
//
// //if equal is clicked read the array
// //equal will have to go thru the array how to turn a string into a number
// //build in method for string into number
// //equal needs to take the event listener and do an math function with the given array.
// //
//
//
//
// ///////////////CALCULATION/////////////////////
// // Using `Array.prototype.push`, perform actions on the `calculation` variable when numbers and operators are pressed
//
// // calculation = `${calculations}+${calculation.push(4)}`;
// //control flow
//
// //if I hit number button then
// //if I hit this then add this to this
// // else do this
//
//
//
// // when a button is pushed at it to the calculation Array
// // I need the click event to store somehwere I can call it back on too.
// ///////////////////////////////////////////
//
//
// //
// //  <input type="text" class="calculator-screen" value="0" disabled />
// //I can change the input
//
// //comments, thinking process, notes below
//
// //write flow chart
// //atomic level of whatever you are doing
// // what do you know how to do
// // do all the little things
//
//
// //set variable to the buttons like query selector to the [CHECK]
// // just display one number , use an eventlister
// //try to get 2+2
//
//
// //i want the function to select the cal screen and display event.target.value
// //functionName addtoscreen()
// //function parameters/inputs buttonOperator
// //function output
// //exepction
// //document.querySelector('.calculator-screen').value = eight.innerHTML
// /////////////////////////////////////////////
//
//
//
// // <input type="text" class="calculator-screen" value="0" disabled />
// // const calscreen = document.querySelector(`.calculator-screen`)
// // calscreen.
// //big funcations, list
//
// // Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called; add this function as an event listener for the number buttons
// // const buttonNum = div.querySelectorAll('.number');
// //////////////////
//
//
//
// //need to loop
// //inside your loop
// // event.target.addEventListener
// //add a eventerlister to each item in the node list
// //note list method to loop,
// //on click do this function
// //is the event object
// //drill down to the
