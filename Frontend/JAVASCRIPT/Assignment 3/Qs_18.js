// Round a number to 2 decimal places.

function roundNum(num) {
    return Number(num.toFixed(2));
}

console.log(roundNum(20.1542));
console.log(roundNum(20));
