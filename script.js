const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.add, .hyphen, .multiply, .divide');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.butequal');


let firstNum = "";
let secondNum = "";
let operator = "";
let isSecond = false;

// Rakam tuşları
digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if (!isSecond) {
            firstNum += digit.textContent;
            display.textContent = firstNum;
        } else {
            secondNum += digit.textContent;
            display.textContent = secondNum;
        }
    });
});

// Operatör tuşları
operators.forEach(op => {
    op.addEventListener('click', () => {
        if (firstNum !== "" && !isSecond) {
            operator = op.textContent;
            isSecond = true;
        }
    });
});

// Eşittir tuşu
equal.addEventListener('click', () => {
    if (firstNum !== "" && secondNum !== "" && operator !== "") {
        const num1 = Number(firstNum);
        const num2 = Number(secondNum);
        let result;
        if (operator === "+") result = add(num1, num2);
        else if (operator === "-") result = subtract(num1, num2);
        else if (operator === "*") result = multiply(num1, num2);
        else if (operator === "/") result = num2 !== 0 ? divide(num1, num2) : "Error";
        else result = "Error";
        display.textContent = result;
        // Sonucu yeni ilk sayı yap, diğerlerini sıfırla
        firstNum = result.toString();
        secondNum = "";
        operator = "";
        isSecond = false;
    }
});

// Temizle tuşu
clear.addEventListener('click', () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    isSecond = false;
    display.textContent = "";
});

// İşlem fonksiyonları
function add(leftnums, rightnums) {
    return leftnums + rightnums;
}
function subtract(leftnums, rightnums) {
    return leftnums - rightnums;
}
function multiply(leftnums, rightnums) {
    return leftnums * rightnums;
}
function divide(leftnums, rightnums) {
    return leftnums / rightnums;
}