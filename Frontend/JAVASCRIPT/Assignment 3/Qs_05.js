// Round 4.2 down and 4.8 up using Math methods.

function roundDown(num) {
    return Math.floor(num);
}

function roundUp(num) {
    return Math.ceil(num);
}

console.log(roundDown(4.2));
console.log(roundUp(4.8));
