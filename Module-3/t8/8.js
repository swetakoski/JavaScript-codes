'use strict';
function myFunction() {
  // Get the values from the input fields
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  // Get the selected operation from the dropdown
  let operation = document.getElementById("operation").value;

  // Perform the calculation based on the selected operation
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
  }

  document.getElementById("result").innerText = "Result: " + result;
}
