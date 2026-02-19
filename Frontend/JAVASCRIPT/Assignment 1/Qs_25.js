// Armstrong Numbers (1-100) --

function getDigitCount(num) {
    let digit = 0;
    while(num!=0){
        digit++;
        num = Math.floor(num/10);
    }
    return digit;
}

function isArmstrong(num) {
    let digit = getDigitCount(num);

    let sum = 0;
    let temp = num;
    while(temp != 0) {
        sum += (temp%10)**digit;
        temp = Math.floor(temp/10);
    }
    return sum == num;
}

function printArmstrongNum() {
    for(let i=0; i<=1000; i++){
        if(i<10) {
            console.log(i);
            continue;
        }

        if(isArmstrong(i)) console.log(i);
    }
}


printArmstrongNum();