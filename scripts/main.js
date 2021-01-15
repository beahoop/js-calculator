//write flow chart
//atomic level of whatever you are doing
// what do you know how to do
// do all the little things


//set variable to the buttons like query selector to the [CHECK]
// just display one number , use an eventlister
//try to get 2+2

//numbers
const ozero = document.querySelector(`[value='0']`);
  // console.log(ozero);
const one = document.querySelector(`[value='1']`);
  // console.log(one);
const two = document.querySelector(`[value='2']`);
  // console.log(two);
const three = document.querySelector(`[value='3']`);
  // console.log(three);
const four = document.querySelector(`[value='4']`);
  // console.log(four);
const five = document.querySelector(`[value='5']`);
  // console.log(five);
const six = document.querySelector(`[value='6']`);
  // console.log(six);
const seven = document.querySelector(`[value='7']`);
  // console.log(seven);
const eight = document.querySelector(`[value='8']`);
  // console.log(eight);
const nine = document.querySelector(`[value='9']`);
  // console.log(nine);

//operator
const percent = document.querySelector(`[value='percent']`);
  // console.log(percent);
const divide = document.querySelector(`[value='/']`);
  // console.log(divide);
const times = document.querySelector(`[value='*']`);
  // console.log(times);
  const minus = document.querySelector(`[value='-']`);
    // console.log(minus);
  const plus = document.querySelector(`[value='+']`);
    // console.log(plus);
  const decimal = document.querySelector(`[value='.']`);
    // console.log(decimal);
  const equal = document.querySelector(`[value='=']`);
    // console.log(equal);

//function
const clear = document.querySelector('.clear') ;
  // console.log(clear);
const plusMinus = document.querySelector('.plus-minus');
  // console.log(plusMinus);

// <input type="text" class="calculator-screen" value="0" disabled />
// const calscreen = document.querySelector(`.calculator-screen`)
// calscreen.
//big funcations, list

// Define a function named `pushNumber` that `alert()`s the number associated with its event argument when called; add this function as an event listener for the number buttons
// const buttonNum = div.querySelectorAll('.number');
///////////////////////NUMBERS//////////////////
const buttonNum = document.querySelectorAll('.number');

function pushNumber(event) {
  console.log(event.target.value);
}
//i want the function to select the cal screen and display event.target.value
buttonNum.forEach(function(e){
    e.addEventListener('click', pushNumber);
  });
/////////////////////////////////////////////

///////////////////////OPERATORS//////////////////
const buttonOperator = document.querySelectorAll('.operator');

function pushOperator(event) {
  console.log(event.target.value);
}
buttonOperator.forEach(function(e){
    e.addEventListener('click', pushOperator);
  })


//i want the function to select the cal screen and display event.target.value
//functionName addtoscreen()
//function parameters/inputs buttonOperator
//function output
//exepction
//document.querySelector('.calculator-screen').value = eight.innerHTML
/////////////////////////////////////////////

/////////////////EQUAL SIGN/////////////////////
//<button type="button" class="equal-sign" value="=">=</button>
const buttonEqual = document.querySelectorAll('.equal-sign');

function calculate(event) {
  let val = (event.target.value);
  console.log(val);
}
//i want the function to select the cal screen and display event.target.value
buttonEqual.forEach(function(e){
    e.addEventListener('click', calculate);
  })


/////////////////////////////////////////////


/////////////////CALCULATION/////////////////////
//Using `Array.prototype.push`, perform actions on the `calculation` variable when numbers and operators are pressed
let calculation = [6];
calculation = `${calculations}+${calculation.push(4)}`;

console.log(calculation);
//when a button is pushed at it to the calculation Array
//I need the click event to store somehwere I can call it back on too.
/////////////////////////////////////////////

/////////////////SHOWS WHAT YOU HIT ON CAL SCREEN/////////////////////
document.querySelector('.calculator-keys')
  .addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
      let value = target.innerHTML
      document.querySelector('.calculator-screen').value = value
    }
  });
  /////////////////////////////////////////////

//



//need to loop
//inside your loop
// event.target.addEventListener
//add a eventerlister to each item in the node list
//note list method to loop,
//on click do this function
//is the event object
//drill down to the
