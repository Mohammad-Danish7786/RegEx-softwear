// Truncate the decimal part of a number.

function getInt(num) {
    return Math.trunc(num);
}

console.log(getInt(20.54));
console.log(getInt(26.12));
