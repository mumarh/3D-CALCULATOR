let calculator = document.getElementsByClassName("calculator");
let buttons = document.getElementsByClassName("buttons");
let display = document.getElementById("display");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14= document.getElementById("btn14");
let btn15 = document.getElementById("btn15");
let btn16 = document.getElementById("btn16");
let btn17 = document.getElementById("btn17");
let btn18 = document.getElementById("btn18");
let btn19 = document.getElementById("btn19");
let btn20 = document.getElementById("btn20");
let btn21 = document.getElementById("btn21");
let btn22 = document.getElementById("btn22");



let history = []; 




btn1.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "(";
});



btn2.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += ")";
});



btn3.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "%";
});



btn4.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value = "";
});



btn5.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "7";
});



btn6.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "8";
});



btn7.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "9";
});



btn8.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "/";
});



btn9.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "4";
});



btn10.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "5";
});



btn11.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "6";
});



btn12.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "*";
});



btn13.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "1";
});



btn14.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "2";
});



btn15.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "3";
});



btn16.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "-";
});



btn17.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "0";
});



btn18.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += ".";
});




btn19.addEventListener("click", (evt) => {
    evt.preventDefault();
    try {
        let expression = display.value;

          expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

          expression = expression.replace(/\)\s*(\d)/g, ')*$1');

        let result = eval(expression);

        history.push(result);
        if (history.length > 10) {
            history = history.slice(-10);
        }

        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
});



btn20.addEventListener("click", (evt) =>{
    evt.preventDefault();
      display.value += "+";
});



btn21.addEventListener("click", (evt) => {
    evt.preventDefault();
    display.value = display.value.slice(0, -1);
});



btn22.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (history.length === 0) {
        display.value = "No previous results.";
    } else {
        let last10 = history.slice(-10);
        display.value = last10
            .map((res, i) => `${i + 1}) ${res}`)
            .join(",    "); 
    }
});