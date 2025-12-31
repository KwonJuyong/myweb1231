const display = document.getElementById('display');
let expression = '';

function append(val) {
  if (display.value === '0') display.value = '';
  display.value += val;
  expression += val;
}

function setOp(op) {
  expression += op;
  display.value = '0';
}

function clearDisplay() {
  display.value = '0';
  expression = '';
}

function calculate() {
  try {
    // eval 대신 간단한 계산 로직 사용 권장되나, 연습용이므로 유지
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (e) {
    display.value = 'Error';
    expression = '';
  }
}