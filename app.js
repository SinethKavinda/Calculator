
function calc() {
    let number1 = new Number(document.getElementById("number1").value);
    let number2 = new Number(document.getElementById("number2").value);
    let op = document.getElementById("op").value;
    let lbloutput = document.getElementById("output");

    switch (op) {
        case "+":
            let add = number1 + number2;
            lbloutput.innerHTML = add;
            break;
        
        case "-":
            let sub = number1 - number2;
            lbloutput.innerHTML = sub;
            break;
        
        case "*":
            let mul = number1 * number2;
            lbloutput.innerHTML = mul;
            break;

        case "/":
            let div = number1 / number2;
            lbloutput.innerHTML = div;
            break;
        default:
            lbloutput.innerHTML = "Enter valid Operator"
            break;
    }
     
}

function num9click() {
    document.getElementById("num1").value= document.getElementById("num1").value+"9";
}

function num8click() {
    document.getElementById("num1").value= document.getElementById("num1").value+"8";
}

function num7click() {
    document.getElementById("num1").value= document.getElementById("num1").value+"7";
}

function num6click() {
    document.getElementById("num1").value= document.getElementById("num1").value+"6";
}