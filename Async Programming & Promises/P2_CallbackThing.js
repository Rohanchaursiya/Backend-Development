async function performOperations(num1, num2, callback1, callback2) {
    if (!isNumber(num1) || !isNumber(num2)) {
        console.log("Invalid input, Enter an Integer");
        return;
    }
    let sum = await callback1(num1, num2);
    callback2(sum);
}

function isNumber(num) {
    return Number.isInteger(num);

}

async function add(num1, num2) {
    return num1 + num2;
}

function multiply(num) {
    setTimeout(function () {
        console.log(num * 2);
    }, 3000);
}

performOperations(2, 3, add, multiply);