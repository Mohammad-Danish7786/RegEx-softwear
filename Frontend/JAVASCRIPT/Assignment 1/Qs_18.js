// HCF (GCD) of Two Numbers --

// not optimized for larger number O(min(num1, num2));
// function printGCD(num1, num2) {
//     let gcd = (num1>num2) ? num2 : num1;
//     while(num1%gcd != 0 || num2%gcd != 0){
//         gcd--;
//     }

//     console.log(`GCD of ${num1} & ${num2} is: ${gcd}`);
// }

// optimized aproach (Euclidean Algorithm) with O(log n)--
function printGCD(num1, num2) {
    while(num2!=0){
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    console.log(`GCD is: ${num1}`);
}

printGCD(10,12);
printGCD(11,12);
printGCD(5,10);
printGCD(5,8);
