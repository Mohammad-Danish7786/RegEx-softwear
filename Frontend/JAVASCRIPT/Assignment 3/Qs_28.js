// Find the LCM of two numbers.

function getGCD(num1, num2) {
    while(num2!=0){
        let temp = num2;
        num2 = num1%num2;
        num1 = temp;
    }

    return num1;
}

function getLCM(num1, num2) {
    return (num1*num2)/getGCD(num1, num2);
}

console.log(getLCM(4, 6));
console.log(getLCM(24, 10));
console.log(getLCM(10, 10));
