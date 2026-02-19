// Check if a number is an Armstrong number.

function getDigit(num) {
    let digit = 0;
    while(num!=0){
        digit++;
        num=Math.floor(num/10);
    }
    return digit;
}

function isArmstrong(num) {

    let digit = getDigit(num);

    let sum = 0, temp = num;
    while(temp!=0){
        sum += Math.pow(temp%10, digit);
        temp = Math.floor(temp/10);
    }
    return sum == num;
}

console.log(isArmstrong(153));
console.log(isArmstrong(2));
console.log(isArmstrong(4));
console.log(isArmstrong(0));

