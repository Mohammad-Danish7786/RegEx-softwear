// Check if a number is a perfect square.

function isPerfectSqr(num) {
    return Number.isInteger(Math.sqrt(num));
}

console.log(isPerfectSqr(25));
console.log(isPerfectSqr(30));
console.log(isPerfectSqr(4));
console.log(isPerfectSqr(8));
