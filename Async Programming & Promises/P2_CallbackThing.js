function performOperations(num1, num2, addCallback, multiplyCallback) {
    let sum = addCallback(num1, num2);
    multiplyCallback(sum);
}

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num) {
    setTimeout(function () {
        console.log(num * 2);
    }, 3000);
}

performOperations(2, 3, add, multiply);