// Reverse a Number --

function reverseNum(num) {
    let revNum = 0;
    
    while(num!=0){
        let lastDigit = num%10;
        revNum = revNum * 10 + lastDigit;
        num = Math.floor(num/10);
    }

    return revNum;
}

console.log(reverseNum(123));
console.log(reverseNum(452));
