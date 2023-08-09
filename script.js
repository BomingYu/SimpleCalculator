let inputNum = [];
let num_1 = null;
let num_2 = null;
let result = null;
let operation = "";

function dealWithNum(num) {
  if (num == "." && inputNum.length == 0) {
    inputNum.push(0);
    inputNum.push(num);
  } else {
    inputNum.push(num);
  }
  displayInput();
}

function displayInput() {
  const number = inputNum.join("");
  clearTopScreen();
  if (inputNum.length == 0) {
    topScreen.value = 0;
  } else {
    topScreen.value = number;
  }
}

function click_1() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(1);
  }
}
function click_2() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(2);
  }
}
function click_3() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(3);
  }
}
function click_4() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(4);
  }
}
function click_5() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(5);
  }
}
function click_6() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(6);
  }
}
function click_7() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(7);
  }
}
function click_8() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(8);
  }
}
function click_9() {
  if (!(inputNum.length == 1 && inputNum[0] == "0")) {
    dealWithNum(9);
  }
}
function click_0() {
  if (!allZero()) {
    dealWithNum(0);
  }
  console.log(inputNum);
}
function click_Pnt() {
  if (inputNum.includes(".")) {
    document.getElementById("pointBtn").disabled = true;
  } else {
    document.getElementById("pointBtn").disabled = false;
    dealWithNum(".");
  }
}
function click_Dev() {
  operation = "/";
  if (num_1 == null) {
    num_1 = inputNum.join("");
  }
  inputNum.length = 0;
}
function click_Time() {
  operation = "*";
  if (num_1 == null) {
    num_1 = inputNum.join("");
  }
  inputNum.length = 0;
}
function click_Min() {
  operation = "-";
  if (num_1 == null) {
    num_1 = inputNum.join("");
  }
  inputNum.length = 0;
}
function click_Pls() {
  operation = "+";
  if (num_1 == null) {
    num_1 = inputNum.join("");
  }
  inputNum.length = 0;
}

function click_Eql() {
  if (inputNum.length == 0) {
    num_2 = num_1;
  } else {
    num_2 = inputNum.join("");
  }
  calculate(num_1, num_2, operation);
  
  //clearTopScreen();
}

function delBtn() {
  inputNum.pop();
  displayInput();
}

function ceBtn() {
  inputNum = [];
  num_1 = null;
  num_2 = null;
  result = null;
  operation = "";

  clearTopScreen();
  const resultOutput = document.getElementById("lowScreen");
  resultOutput.value = '0';
}

function calculate(num1, num2, opetator) {
  if (opetator == "+") {
    result = Number(num1) + Number(num2);
    num_1 = result;
  }
  if (opetator == "-") {
    result = Number(num1) - Number(num2);
    num_1 = result;
  }
  if (opetator == "*") {
    result = Number(num1) * Number(num2);
    num_1 = result;
  }
  if (opetator == "/") {
    if (num2 != "0") {
      result = Number(num1) / Number(num2);
      num_1 = result;
    } else {
      const topScreen = document.getElementById("topScreen");
      topScreen.value = "Error";
    }
  }
  displayResult();
}

function displayResult() {
  const resultOutput = document.getElementById("lowScreen");
  resultOutput.value = "";
  resultOutput.value = result;
}

function clearTopScreen() {
  const topScreen = document.getElementById("topScreen");
  topScreen.value = 0;
}

function allZero() {
  let allZero = true;
  if (inputNum.length != 0) {
    for (let i = 0; i < inputNum.length; i++) {
      if (inputNum[i] != "0") {
        allZero = allZero && false;
      }
    }
  } else {
    allZero = false;
  }
  return allZero;
}
