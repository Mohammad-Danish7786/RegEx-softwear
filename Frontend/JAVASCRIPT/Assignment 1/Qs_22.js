// count Even & Odd Digits --

function countEvenOddDigit(num) {
    let temp = num;
    let evenDigit = 0;
    let oddDigit = 0;

    while(temp!=0){
        let digit = temp%10;
        if(digit%2 == 0) evenDigit++;
        else oddDigit++;

        temp = Math.floor(temp/10);
    }
    
    // console.log(`Count of Even digits in ${num}: ${evenDigit}`);
    // console.log(`Count of Odd digits in ${num}: ${oddDigit}`);
    console.log(`Count of Even digits : ${evenDigit}, Odd digits: ${oddDigit} in ${num}`);
}

countEvenOddDigit(235);
countEvenOddDigit(246);
countEvenOddDigit(259);