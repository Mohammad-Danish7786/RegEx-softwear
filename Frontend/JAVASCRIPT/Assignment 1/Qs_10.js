// Largest of Three Numbers --

function maxNum(num1, num2, num3) {
    let max = (num1>num2) ? (num1 > num3) ? num1 : num3 : num2;
    return max;
}

console.log(maxNum(4,3,5));
console.log(maxNum(10,3,5));
console.log(maxNum(10,33,5));

