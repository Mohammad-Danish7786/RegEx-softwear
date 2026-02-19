// Find the sum of digits of a number.

function sumOfDigit(num) {
    let sum = 0;
    num = Math.abs(num);
    while(num!=0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumOfDigit(123));
console.log(sumOfDigit(1234));
console.log(sumOfDigit(12345));
