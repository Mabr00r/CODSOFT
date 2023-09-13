let currentInput = "";

function myFunction(value) {
    currentInput += value;
    document.getElementById("input").innerText = currentInput;
}

function clearInput() {
    currentInput = "";
    document.getElementById("input").innerText = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        document.getElementById("input").innerText = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById("input").innerText = "Error";
        currentInput = "";
    }
}