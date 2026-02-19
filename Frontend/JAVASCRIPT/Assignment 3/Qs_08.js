// Check whether a number is finite.

function isFinite(num) {
    return Number.isFinite(num);
}

console.log(isFinite(2552));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

