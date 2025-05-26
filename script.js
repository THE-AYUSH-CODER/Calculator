let display = document.querySelector(".display");
let currentDisplayValue;
clearDisplay();

function setDisplay(num) {
  currentDisplayValue += num;
  display.value = currentDisplayValue;
}

function clearDisplay() {
  currentDisplayValue = "";
  display.value = currentDisplayValue;
}

function calculateResult() {
  let result = eval(currentDisplayValue);
  currentDisplayValue = result;
  display.value = currentDisplayValue;
}

function clearElement() {
  currentDisplayValue = currentDisplayValue.slice(0, -1);
  display.value = currentDisplayValue;
}

let status = true;

function insertBracket() {
  let lastElement = currentDisplayValue[currentDisplayValue.length - 1];
  if (
    status == true &&
    (lastElement == "+" ||
      lastElement == "-" ||
      lastElement == "*" ||
      lastElement == "/" ||
      lastElement == undefined)
  ) {
    setDisplay("(");
    status = false;
  } else if (
    status == false &&
    (lastElement == "1" ||
      lastElement == "2" ||
      lastElement == "3" ||
      lastElement == "4" ||
      lastElement == "5" ||
      lastElement == "6" ||
      lastElement == "7" ||
      lastElement == "8" ||
      lastElement == "9" ||
      lastElement == "0")
  ) {
    setDisplay(")");
    status = true;
  }
}
