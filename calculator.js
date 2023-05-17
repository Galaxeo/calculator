let result = 0;
let val = '';
let flag = 0;
const container = document.body.querySelector('.container');
let buttons = container.getElementsByClassName('digit');
const screen = document.body.querySelector('#screen');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (isNaN(this.innerText)) {
      cal(this.innerText);
    } else {
      val += this.innerText;
      screen.innerText = val;
    }
  })
}
function cal(exp) {
  if (flag == 0) {
    flag = 1;
    val += exp;
  } else {
    if (exp == "=") {
      if (isNaN(val.slice(-1))) {
        console.log(val[-1]);
        val = val.slice(0, -1);
      }
      result = Function("return " + val)();
      screen.innerText = result;
      val = result;
    } else if (exp == "Clear") {
      val = '';
      result = 0;
      screen.innerText = '';
    } else {
      result = Function("return " + val)();
      val = result;
      val += exp;
      screen.innerText = val;
    }
  }
}
