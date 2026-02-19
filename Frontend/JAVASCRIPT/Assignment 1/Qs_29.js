// Digit Frequency Counter --

function countFreqOfEachDigit(num) {
    let freq = new Map();

    if(num == 0) {
        freq.set(0,1);
    }
    else {
        let n = Math.abs(num);
        while(n!=0) {
            let digit = n%10;
            freq.set(digit, (freq.get(digit) || 0) + 1);
            n = Math.floor(n/10);
        }
    }

    console.log(`\nFreq of digit in ${num}: `);
    for(let [key,val] of freq) {
        console.log(`${key}: ${val}`);
    }
}


countFreqOfEachDigit(11223355)
countFreqOfEachDigit(112233554)
countFreqOfEachDigit(112233554114)
