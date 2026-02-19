// Convert a number to a fixed 2 decimal places.

function fixedDecimal(num, val) {
    return num.toFixed(val);
}

console.log(fixedDecimal(4.123, 2));
console.log(fixedDecimal(43.54, 1));

