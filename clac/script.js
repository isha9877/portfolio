function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Please enter valid numbers.");
        return;
    }

    var sum = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + sum;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Please enter valid numbers.");
        return;
    }

    var difference = num1 - num2;
    document.getElementById("result").innerHTML = "Result: " + difference;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Please enter valid numbers.");
        return;
    }

    var product = num1 * num2;
    document.getElementById("result").innerHTML = "Result: " + product;
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Please enter valid numbers.");
        return;
    }

    var quotient = num1 / num2;
    document.getElementById("result").innerHTML = "Result: " + quotient;
}

function validateNumberInput(event) {
    var keyCode = event.keyCode;
    
    // Allow numbers (0-9) and decimal point
    if ((keyCode >= 48 && keyCode <= 57) || keyCode === 46) {
        // Check if the input already contains a decimal point
        if (keyCode === 46 && event.target.value.includes('.')) {
            event.preventDefault();
        }
    } else {
        event.preventDefault();
    }
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
}