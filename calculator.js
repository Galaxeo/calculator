let result = 0;
let val = '';
let flag = 0;
let decimalFlag = 0;
const container = document.body.querySelector('.container');
let buttons = container.getElementsByClassName('digit');
const screen = document.body.querySelector('#screen');
const exp = ["+", "-", "/", "=", "*", "Enter"]

// Keyboard Support
document.addEventListener('keydown', (event) => {
  console.log(event.key);
  if ((exp.includes(event.key)) & event.key != '.') {
    cal(event.key);
  } else if (!isNaN(event.key) || event.key == '.') {
    if (event.key == '.') {
      if (decimalFlag) {
        return 0;
      } else {
        decimalFlag = 1;
      }
    }
    val += event.key;
    screen.innerText = val;
  }
})

//Buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (isNaN(this.innerText) & this.innerText != '.') {
      cal(this.innerText);
    } else {
      if (this.innerText == '.') {
        if (decimalFlag) {
          return 0;
        } else {
          decimalFlag = 1;
        }
      }
      val += this.innerText;
      screen.innerText = val;
    }
  })
}
function cal(exp) {
  if (flag == 0) {
    if (val == '') {
      return 0;
    }
    flag = 1;
    val += exp;
  } else {
    if (exp == "=") {
      if (isNaN(val.slice(-1))) {
        console.log(val[-1]);
        val = val.slice(0, -1);
      }
      result = Math.round(Function("return " + val)() * 100) / 100;
      screen.innerText = result;
      val = result;
    } else if (exp == "Clear") {
      val = '';
      result = 0;
      flag = 0;
      screen.innerText = 'Enter some numbers!';
    } else {
      result = Math.round(Function("return " + val)() * 100) / 100;
      val = result;
      val += exp;
      screen.innerText = val;
    }
  }
}
