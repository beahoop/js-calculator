//write flow chart
//atomic level of whatever you are doing
// what do you know how to do
// do all the little things


//set variable to the buttons like query selector to the [CHECK]
// just display one number , use an eventlister
//try to get 2+2


//i want the function to select the cal screen and display event.target.value
//functionName addtoscreen()
//function parameters/inputs buttonOperator
//function output
//exepction
//document.querySelector('.calculator-screen').value = eight.innerHTML
/////////////////////////////////////////////



// <input type="text" class="calculator-screen" value="0" disabled />
// const calscreen = document.querySelector(`.calculator-screen`)
// calscreen.
//big funcations, list

// Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called; add this function as an event listener for the number buttons
// const buttonNum = div.querySelectorAll('.number');
//////////////////
const buttonNum = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');
const buttonClear = document.querySelectorAll('.clear');
const buttonPlusMinus = document.querySelectorAll('.plus-minus');
const buttonPercent = document.querySelectorAll('.percent');
const buttonOzero = document.querySelectorAll('.number btn-lg');
const buttonDecimal = document.querySelectorAll('.decimal');
const buttonEqual = document.querySelectorAll('.equal-sign');

///////////////////////NUMBERS//////////////////

buttonNum.forEach(function(e){
    e.addEventListener('click', pushNumber);
  });

function pushNumber(event) {
  if(calDisplay.value == "0") {
    calDisplay.value = null;
    calDisplay.value = (calDisplay.value + event.target.value);
    } else {
  calDisplay.value = (calDisplay.value + event.target.value);
  }
  console.log(event.target.value);
}
/////////////////////////////////////////////

///////////////////////OPERATORS//////////////////
// const buttonOperator = document.querySelectorAll('.operator');
// function pushOperator(event) {
//   console.log(event.target.value);
// }
buttonOperator.forEach(function(e){
    e.addEventListener('click', pushOperator);
  });

  function pushOperator(event) {
    if(calDisplay.value == "0") {
      calDisplay.value = null;
      calDisplay.value = (calDisplay.value + event.target.value);
      } else {
    calDisplay.value = (calDisplay.value + event.target.value);
    }
    console.log(event.target.value);
  }
//////////////////////////////////////////////

const calDisplay = document.querySelector('.calculator-screen');


///////////////CLEAR /////////////////
// const buttonClear = document.querySelectorAll('.clear');
//when you hit clear the array needs to be set back to empty array

function clickClear() {
  calDisplay.value = 0;
}

buttonClear.forEach(function(e){
    e.addEventListener('click', clickClear);
  });


/////////////////////////////////


///////////////////////PLUS MINUS//////////////////
// const buttonPlusMinus = document.querySelectorAll('.plus-minus');
function pushPlusMinus(event) {
  console.log(event.target.value);
}
buttonPlusMinus.forEach(function(e){
    e.addEventListener('click', pushPlusMinus);
  });
//////////////////////////////////////////////

///////////////////////PRECENT//////////////////
// const buttonPercent = document.querySelectorAll('.percent');
function pushPercent(event) {
  console.log(event.target.value);
}
buttonPercent.forEach(function(e){
    e.addEventListener('click', pushPercent);
  });
//////////////////////////////////////////////

///////////////////////OZERO//////////////////
// const buttonOzero = document.querySelectorAll('.number btn-lg');
function pushOzero(event) {
  console.log(event.target.value);
}
buttonOzero.forEach(function(e){
    e.addEventListener('click', pushOzero);
  });
//////////////////////////////////////////////

///////////////////////OZERO//////////////////
// const buttonDecimal = document.querySelectorAll('.decimal');
function pushDecimal(event) {
  console.log(event.target.value);
}
buttonDecimal.forEach(function(e){
    e.addEventListener('click', pushDecimal);
  });
//////////////////////////////////////////////


///////////////////////EQAUL SIGN//////////////////
// const const buttonEqual = document.querySelectorAll('.equal-sign');
function pushEqual(event) {
  console.log(event.target.value);
}
buttonEqual.forEach(function(e){
    e.addEventListener('click', pushEqual);
  });
//////////////////////////////////////////////




/////////////////CALCULATION/////////////////////
//Using `Array.prototype.push`, perform actions on the `calculation` variable when numbers and operators are pressed
// let calculation = [];
// // calculation = `${calculations}+${calculation.push(4)}`;
// //control flow
//
// function add() {
//
// }
// //if I hit number button then
// //if I hit this then add this to this
// // else do this
//
// calculation.forEach(add);

// function add(new_element){
// 	let arr = [1,2,3,4,5];
// 	for(let i=0;i<arr.length;i++){
// 		arr.push(new_element);
// 	}
//
// 	return arr;
// }
// console.log(add("a"));
//when a button is pushed at it to the calculation Array
//I need the click event to store somehwere I can call it back on too.
/////////////////////////////////////////////


//
//  <input type="text" class="calculator-screen" value="0" disabled />
//I can change the input


//need to loop
//inside your loop
// event.target.addEventListener
//add a eventerlister to each item in the node list
//note list method to loop,
//on click do this function
//is the event object
//drill down to the
