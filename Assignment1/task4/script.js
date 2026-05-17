let a = 6;
let b = 15;
let operation = "+"; 

switch (operation) {
    case "+":
        alert(a + b);
        break;
    case "-":
        alert(a - b);
        break;
    case "*":
        alert(a * b);
        break;
    case "/":
        alert(a / b);
        break;
    case "%":
        alert(a % b);
        break;
    default:
        alert("Invalid operation. Try(+,-,*,/,%)");
}
