/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1,number2) {
    return number1,number2;
}
// Step 2: In the function, return the sum of the parameters number1 and number2
function sum (addNumber1, addNumber2) {
  let sum = add(addNumber1,addNumber2);
  return sum +=(sum);
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function;
function addNumbers() {
  const addNumberOne= Number(document.getElementById("addend1").value);
  const addNumberTwo= Number(document.getElementById("addend2").value);
  const result = sum(addNumberOne, addNumberTwo);
  return result;
};
// Step 4: Assign the return value to an HTML form element with an ID of sum
function vauleNumber() {
  document.getElementById("sum").value = addNumbers();
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
   document.getElementById("addNumbers").addEventListener("click", vauleNumber);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
subtract = () => {
  function subtractNum(number1,number2) {
      return number1 - number2;
  }
  
  function sumSub (subtNumber1, subtNumber2) {
    let subst = subtractNum(subtNumber1,subtNumber2);
    return subst 
  }
  function subtractNumbers() {
  const substractNumberOne= Number(document.getElementById("minuend").value);
    const substractNumberTwo= Number(document.getElementById("subtrahend").value);
    const subResult = sumSub(substractNumberOne, substractNumberTwo);
    return subResult;
  };
  
  function subtractVauleNumber() {
    document.getElementById("difference").value = subtractNumbers();
  }
  document.getElementById("subtractNumbers").addEventListener("click", subtractVauleNumber);
}
subtract();
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
mulitplyNumbers = () => {
  function mulitplyNum(number1,number2) {
      return number1 * number2;
  }
  
  function mulitplySub (subtNumber1, subtNumber2) {
    let mulitp = mulitplyNum(subtNumber1,subtNumber2);
    return mulitp 
  }
  function mulitplyNumbers() {
      const mulitplyNumberOne= Number(document.getElementById("factor1").value);
    const mulitplyNumberTwo= Number(document.getElementById("factor2").value);
    const mulityResult = mulitplySub(mulitplyNumberOne, mulitplyNumberTwo);
    return mulityResult;
  };
  
  function mulitplyVauleNumber() {
    document.getElementById("product").value = mulitplyNumbers();
  }
  document.getElementById("multiplyNumbers").addEventListener("click", mulitplyVauleNumber);
}
mulitplyNumbers();
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
divideNumbers = () => {
  function dividNum(number1,number2) {
      return number1 / number2;
  }
  
  function dividSub (subtNumber1, subtNumber2) {
    let subst = dividNum(subtNumber1,subtNumber2);
    return subst 
  }
  function dividNumbers() {
      const dividNumberOne= Number(document.getElementById("dividend").value);
    const dividNumberTwo= Number(document.getElementById("divisor").value);
    const dividResult = dividSub(dividNumberOne, dividNumberTwo);
    return dividResult;
  };
  
  function dividVauleNumber() {
    document.getElementById("quotient").value = dividNumbers();
  }
  document.getElementById("divideNumbers").addEventListener("click", dividVauleNumber);
}
divideNumbers();
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
 const currentYear = new Date();
// Step 2: Declare a variable to hold the current year
 const textYear = currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
 const year = textYear.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").textContent = year



/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let arrayNumbers = new Array (1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25);
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = arrayNumbers;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNumbers = arrayNumbers.filter(n => n%2)
document.getElementById("odds").innerHTML = oddNumbers;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evensNumbers = arrayNumbers.filter(function(x) {
  return x % 2 === 0;
})
document.getElementById("evens").innerHTML = evensNumbers;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArr = arrayNumbers.reduce((a, b) => {
  return a + b;
});
document.getElementById("sumOfArray").innerHTML = sumOfArr;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const doubledNumbers = arrayNumbers.map(num => num * 2);
document.getElementById("multiplied").innerHTML = doubledNumbers;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiNumbers = arrayNumbers.map(num => num * 2);
const sumOfArrumOfMulti = sumOfMultiNumbers.reduce((x, y) => {
  return x + y;
});
document.getElementById("sumOfMultiplied").innerHTML = sumOfArrumOfMulti;