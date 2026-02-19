// Find the random OTP of 6 digit

function generateOTP(digit) {
    let otp = "";
    while(digit>0){
        otp += Math.floor(Math.random()*10)
        digit--;
    }
    return otp;
}

console.log(generateOTP(6));
console.log(generateOTP(4));
console.log(generateOTP(2));
