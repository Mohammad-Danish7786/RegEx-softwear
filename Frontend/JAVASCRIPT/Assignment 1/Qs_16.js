// Sum of Digits --

function sumOfDigit(num) {
    let sum = 0;
    while(num!=0) {
        sum += num%10;
        num = Math.floor(num/10);
    }

    return sum;
}

console.log(sumOfDigit(123));
console.log(sumOfDigit(1234));
console.log(sumOfDigit(634));
