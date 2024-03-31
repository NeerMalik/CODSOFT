document.addEventListener("keydown", handleKeyPress);
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
 displayValue="";
function appendToDisplay(value){
    
    displayValue+=value;
    updateDisplay();
}
function clearDisplay(){
    displayValue="";
    updateDisplay();
}


function operate(operator) {
    if (operator === 'ln') {
        displayValue += 'Math.log(';
    } else if (operator === 'log') {
        displayValue += 'Math.log10(';
    }
    else if (operator === '^') {
        displayValue+='**';
    }
    else if(operator==='1/x'){
        displayValue=(1/displayValue)  }
    else {
        displayValue += operator;
    }

    updateDisplay();
}
function calculate(){
    try{
        displayValue=eval(displayValue);
        updateDisplay();
    }
    catch(error){
        displayValue="error"
        updateDisplay();
    }
}
function clearDisplay1(){

    displayValue=displayValue.slice(0,-1);
    updateDisplay();
}
function handleKeyPress(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/'||key==='%') {
        operate(key);
    }else if (key === '^') {
        displayValue += '**';
    } else if (key === '(') {
        appendToDisplay(key);
    } else if (key === ')') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay1();
    }
}

