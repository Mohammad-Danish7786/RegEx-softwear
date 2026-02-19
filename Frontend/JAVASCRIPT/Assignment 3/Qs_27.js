// Find the GCD (HCF) of two numbers.

function getGCD(num1, num2) {
    // let min = Math.min(num1, num2);

    // while(num1%min != 0 || num2%min != 0){
    //     min--;
    // }

    while(num2!==0){
        let temp = num2;
        num2 = num1%num2;
        num1 = temp;
    }

    return num1;
}

console.log(getGCD(2,10));
console.log(getGCD(8,10));
console.log(getGCD(82,10));
