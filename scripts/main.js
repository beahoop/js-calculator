
const buttonNum = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');
const buttonClear = document.querySelectorAll('.clear');
const buttonPlusMinus = document.querySelectorAll('.plus-minus');
const buttonPercent = document.querySelectorAll('.percent');
const buttonOzero = document.querySelectorAll('.number btn-lg');
const buttonDecimal = document.querySelectorAll('.decimal');
const buttonEqual = document.querySelectorAll('.equal-sign');
let calDisplay = document.querySelector('.calculator-screen');

let calculation = [];

///////////////////////NUMBERS//////////////////

buttonNum.forEach(function(e){
    e.addEventListener('click', pushNumber);
  });
buttonOperator.forEach(function(e){
    e.addEventListener('click', pushOperator);
  });
buttonClear.forEach(function(e){
    e.addEventListener('click', clickClear);
  });
buttonPlusMinus.forEach(function(e){
    e.addEventListener('click', pushPlusMinus);
  });
buttonPercent.forEach(function(e){
    e.addEventListener('click', pushPercent);
  });
buttonOzero.forEach(function(e){
    e.addEventListener('click', pushOzero);
  });
buttonDecimal.forEach(function(e){
    e.addEventListener('click', pushDecimal);
  });

buttonEqual.forEach(function(e){
    e.addEventListener('click', pushEqual);
  });


function clickClear() {
  calDisplay.value = 0;
}
function pushNumber(event) {
  if(calDisplay.value == "0") {
    calDisplay.value = null;
    calDisplay.value = (calDisplay.value + event.target.value);
    calculation.push(event.target.value);
    console.log(calculation);
    } else {
  calDisplay.value = (calDisplay.value + event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
  }


//array.push(value of the event that is a happenign to the event listener)


}
function pushOperator(event) {
  if(calDisplay.value == "0") {
    calDisplay.value = null;
    calDisplay.value = (calDisplay.value + event.target.value);
    calculation.push(event.target.value);
    console.log(calculation);
    } else {
  calDisplay.value = (calDisplay.value + event.target.value);
  calculation.push(event.target.value);
  console.log(calculation);
  }
}

function pushPlusMinus(event) {
  if(calDisplay.value == "0") {
    calDisplay.value = null;
    calDisplay.value = (calDisplay.value + event.target.value);
    } else {
  calDisplay.value = (calDisplay.value + event.target.value);
  }
}
function pushPercent(event) {
  if(calDisplay.value == "0") {
    calDisplay.value = null;
    calDisplay.value = (calDisplay.value + event.target.value);
    } else {
  calDisplay.value = (calDisplay.value + event.target.value);
  }
}
function pushOzero(event) {
  if(calDisplay.value == "0") {
    calDisplay.value = null;
    calDisplay.value = (calDisplay.value + event.target.value);
    } else {
  calDisplay.value = (calDisplay.value + event.target.value);
  }
}
function pushDecimal(event) {
  if(calDisplay.value == "0") {
    calDisplay.value = null;
    calDisplay.value = (calDisplay.value + event.target.value);
    } else {
  calDisplay.value = (calDisplay.value + event.target.value);
  }
}
//decimal should only show up once between 0.000 and not be allowed to
//display in any other order
//2.0 + 3 = tell it the cal it shouldn't keep the .0
// dividing by 0 can't do this or NaN







function pushEqual(event) {
  calculation = calculation.join('');
  calDisplay = eval(calculation);

}
//parseFloat this will turn a string into a number
// const nums = '0123456789'-> needs to be a
//
// for (var i = 0; i < calculation.length; i++) {
//   calculation[i]


//   if(nums.includes(calculation[i])){
//   }
//
// }

//for loop we want it to go over array pick out numbers and operators

//if equal is clicked read the array
//equal will have to go thru the array how to turn a string into a number
//build in method for string into number
//equal needs to take the event listener and do an math function with the given array.
//



///////////////CALCULATION/////////////////////
// Using `Array.prototype.push`, perform actions on the `calculation` variable when numbers and operators are pressed

// calculation = `${calculations}+${calculation.push(4)}`;
//control flow

//if I hit number button then
//if I hit this then add this to this
// else do this



// when a button is pushed at it to the calculation Array
// I need the click event to store somehwere I can call it back on too.
///////////////////////////////////////////


//
//  <input type="text" class="calculator-screen" value="0" disabled />
//I can change the input

//comments, thinking process, notes below

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



//need to loop
//inside your loop
// event.target.addEventListener
//add a eventerlister to each item in the node list
//note list method to loop,
//on click do this function
//is the event object
//drill down to the
