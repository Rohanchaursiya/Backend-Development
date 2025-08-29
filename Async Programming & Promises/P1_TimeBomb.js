//🔥 Problem 1: TimeBomb
// Problem Statement:
// Create a function called countdown that takes a number as a parameter and logs the numbers from that number down to 1, with a delay of 1 second between each log.
// After reaching 1, log:
// "Countdown complete! Boom..!"



// ---------------------------------------------------------------------

// function CountDown(num) {
//     for (let counter = num; counter >= 1; counter--) {
//         setTimeout(function () {
//             if (counter == 1) {
//                 console.log(counter);
//                 console.log("Count Down completed! Boom..!");
//             } else {
//                 console.log(counter);
//             }
//         }, (num + 1 - counter) * 1000);
//     }
// }

// let num = 10;
// CountDown(num);


// -----------------------------------------------------------

function countDown(num) {
    isNumber(num)
        ? timer(isNumber(num))
        : console.log("Invalid input, Enter an Integer");
}

function isNumber(num) {
    if (!Number.isInteger(num) || num <= 0) {
        return 0;
    }
    return num;
}

function timer(num) {
    console.log(num);
    if (num === 1) {
        console.log("Count Down completed! Boom..!");
        return;
    }
    setTimeout(() => timer(num - 1), 1000);
}

let num = 10;
countDown(num);

