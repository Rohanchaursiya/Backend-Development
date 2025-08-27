function CountDown(num) {
    for (let counter = num; counter >= 1; counter--) {
        setTimeout(function () {
            if (counter == 1) {
                console.log(counter);
                console.log("Count Down completed! Boom..!");
            } else {
                console.log(counter);
            }
        }, (num + 1 - counter) * 1000);
    }
}

let num = 10;
CountDown(num);

