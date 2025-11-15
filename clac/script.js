let display = document.getElementById('display');
let resultDiv = document.getElementById('result');

// Append characters to display
function appendToDisplay(char) {
    if (display.value === '0' && char !== '.' && char !== '(' && char !== ')') {
        display.value = char;
    } else {
        display.value += char;
    }
    resultDiv.innerHTML = '';
}

// Clear display
function clearDisplay() {
    display.value = '0';
    resultDiv.innerHTML = '';
}

// Delete last character
function deleteLastChar() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
    resultDiv.innerHTML = '';
}

// Toggle positive/negative sign
function toggleSign() {
    let value = parseFloat(display.value);
    if (isNaN(value)) return;
    display.value = -value;
}

// Calculate result
function calculateResult() {
    try {
        let expression = display.value;
        // Replace symbols with JavaScript operators
        expression = expression.replace(/÷/g, '/');
        expression = expression.replace(/×/g, '*');
        expression = expression.replace(/\^/g, '**');
        
        let result = eval(expression);
        display.value = result;
        resultDiv.innerHTML = 'Result: ' + result;
    } catch (error) {
        resultDiv.innerHTML = 'Error: Invalid expression';
    }
}

// Trigonometric functions (in radians)
function calculateSin() {
    try {
        let value = parseFloat(display.value);
        // Convert degrees to radians
        let radians = value * (Math.PI / 180);
        let result = Math.sin(radians);
        display.value = result.toFixed(6);
        resultDiv.innerHTML = 'sin(' + value + '°) = ' + result.toFixed(6);
    } catch (error) {
        resultDiv.innerHTML = 'Error';
    }
}

function calculateCos() {
    try {
        let value = parseFloat(display.value);
        let radians = value * (Math.PI / 180);
        let result = Math.cos(radians);
        display.value = result.toFixed(6);
        resultDiv.innerHTML = 'cos(' + value + '°) = ' + result.toFixed(6);
    } catch (error) {
        resultDiv.innerHTML = 'Error';
    }
}

function calculateTan() {
    try {
        let value = parseFloat(display.value);
        let radians = value * (Math.PI / 180);
        let result = Math.tan(radians);
        display.value = result.toFixed(6);
        resultDiv.innerHTML = 'tan(' + value + '°) = ' + result.toFixed(6);
    } catch (error) {
        resultDiv.innerHTML = 'Error';
    }
}

// Logarithmic functions
function calculateLog() {
    try {
        let value = parseFloat(display.value);
        if (value <= 0) {
            resultDiv.innerHTML = 'Error: log of non-positive number';
            return;
        }
        let result = Math.log10(value);
        display.value = result.toFixed(6);
        resultDiv.innerHTML = 'log(' + value + ') = ' + result.toFixed(6);
    } catch (error) {
        resultDiv.innerHTML = 'Error';
    }
}

function calculateLn() {
    try {
        let value = parseFloat(display.value);
        if (value <= 0) {
            resultDiv.innerHTML = 'Error: ln of non-positive number';
            return;
        }
        let result = Math.log(value);
        display.value = result.toFixed(6);
        resultDiv.innerHTML = 'ln(' + value + ') = ' + result.toFixed(6);
    } catch (error) {
        resultDiv.innerHTML = 'Error';
    }
}

// Square root
function calculateSqrt() {
    try {
        let value = parseFloat(display.value);
        if (value < 0) {
            resultDiv.innerHTML = 'Error: sqrt of negative number';
            return;
        }
        let result = Math.sqrt(value);
        display.value = result.toFixed(6);
        resultDiv.innerHTML = '√' + value + ' = ' + result.toFixed(6);
    } catch (error) {
        resultDiv.innerHTML = 'Error';
    }
}

// Factorial
function calculateFactorial() {
    try {
        let value = parseInt(display.value);
        if (value < 0) {
            resultDiv.innerHTML = 'Error: factorial of negative number';
            return;
        }
        if (value > 170) {
            resultDiv.innerHTML = 'Error: number too large';
            return;
        }
        let result = 1;
        for (let i = 2; i <= value; i++) {
            result *= i;
        }
        display.value = result;
        resultDiv.innerHTML = value + '! = ' + result;
    } catch (error) {
        resultDiv.innerHTML = 'Error';
    }
}

// Percentage
function calculatePercent() {
    try {
        let value = parseFloat(display.value);
        let result = value / 100;
        display.value = result;
        resultDiv.innerHTML = value + '% = ' + result;
    } catch (error) {
        resultDiv.innerHTML = 'Error';
    }
}

// Constants
function calculatePi() {
    display.value = Math.PI.toFixed(6);
    resultDiv.innerHTML = 'π = ' + Math.PI.toFixed(6);
}

function calculateE() {
    display.value = Math.E.toFixed(6);
    resultDiv.innerHTML = 'e = ' + Math.E.toFixed(6);
}

// Initialize display
window.addEventListener('load', function() {
    display.value = '0';
});

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLastChar();
    }
});