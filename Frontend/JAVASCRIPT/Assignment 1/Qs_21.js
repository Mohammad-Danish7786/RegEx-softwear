// Armstrong Number Check --

function getDigit(num) {
    let digit = 0;
    while(num!=0) {
        digit++;
        num = Math.floor(num/10);
    }
    return digit;
}

function isArmstrongNum(num) {
    let digit = getDigit(num);

    let temp = num;
    let sum = 0;

    while(temp != 0){
        sum = sum + (temp%10)**digit;
        temp = Math.floor(temp/10);
    }

    if(num == sum){
        console.log(`Given number ${num} is a armstrong number!`);
    }else {
        console.log(`Given number ${num} is not a armstrong number!`);
    }    
}

isArmstrongNum(153);
isArmstrongNum(123);
isArmstrongNum(1);
isArmstrongNum(0);
