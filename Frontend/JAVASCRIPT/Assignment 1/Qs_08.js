// Count Digits in a Number --

function countDigit(num) {
    let digit = 0;
    while(num!=0){
        digit++;
        num = Math.floor(num/10);
    }
    console.log("Digits: "<< digit);
}

countDigit(245);
countDigit(2845);
