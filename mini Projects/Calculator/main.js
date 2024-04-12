const numbers_btn = document.querySelectorAll("button[data-type=operand]");
const operator_btn = document.querySelectorAll("button[data-type=operator]");
const display_result = document.querySelector("#result");
let flag = false;

numbers_btn.forEach((btn) =>{
    
   
    btn.addEventListener("click", ()=>{
        if(flag){

            flag = false;
            display_result.innerHTML = "";
        }
        display_result.innerText  += btn.innerHTML;
    })
})
operator_btn.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        // console.log(btn.textContent)
       
        eventHandler(btn.innerHTML);
    })
})


function eventHandler(btn){
    
    if(btn == "=")
    {
        let result;
        let expression = display_result.innerHTML;

        try {
            result = eval(expression);
            result = roundDecimal(result, 4);
        } catch (error) {
            result = 'SyntaxError';
        }
        display_result.innerHTML = result;
        display_result.style.color = "rgba(255, 255, 255, 1)";
        flag = true;
    }
    else if(btn == "AC"){
        display_result.innerHTML = "";
    }
    else if(btn == "CE"){
        display_result.innerHTML = display_result.innerHTML.slice(0,-1);    
    }
    else{
        display_result.innerHTML += btn;
    }

}
function roundDecimal(number, decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.round(number * factor) / factor;
}


//keyboard events 
document.addEventListener("keydown", (event) => {
    const key = event.key;
  
    if (isValidKey(key)) {
      event.preventDefault();
      simulateButtonClick(key);
    }
});
  
function isValidKey(key) {
    const validKeys = [
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
      ".", "+", "-", "*", "/",
      "=", "Enter", "Escape", "Backspace"   
    ];
  
    return validKeys.includes(key);
}
  
function simulateButtonClick(key) {
    const button = [...numbers_btn, ...operator_btn].find((btn) => btn.textContent === key);
  
    if (button) {
      button.click();
    } else if (key === "Enter" || key === "Equal") {f
      calculateResult();
    } else if (key === "Backspace") {
      display_result.innerHTML = display_result.innerHTML.slice(0, -1);
    }
}
  
function calculateResult() {
    let result;
    let expression = display_result.innerHTML;
  
    try {
      result = eval(expression);
      result = roundDecimal(result, 4);
    } catch (error) {
      result = 'SyntaxError';
    }
    
    display_result.innerHTML = result;
    display_result.style.color = "rgba(255, 255, 255, 1)";
    flag = true;
}
  
function roundDecimal(number, decimalPlaces) {
    const factor = 10 ** decimalPlaces;
    return Math.round(number * factor) / factor;
}