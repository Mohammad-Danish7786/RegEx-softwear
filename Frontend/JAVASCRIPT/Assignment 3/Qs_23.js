// Reverse a number using Number methods.

function reverseNum(num) {
    let rev = 0;
    while(num!=0) {
        rev = rev *10 + num%10;
        num = Math.floor(num/10);
    }

    return Number(rev);
}

console.log(reverseNum(10300));
console.log(reverseNum(542));
