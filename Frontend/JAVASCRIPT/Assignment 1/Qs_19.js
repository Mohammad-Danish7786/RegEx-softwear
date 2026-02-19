// LCM of Two Numbers --

// not optimized for larger numbers O(max(num1,num2));
// function printLCM(num1, num2){
//     let lcm = 1;
//     let i=2;
//     while(num1!=1 || num2!=1){
//         if(num1%i==0 || num2%i == 0){
//             lcm *= i;
//         }

//         if(num1%i == 0) num1 /=i;
//         if(num2%i == 0) num2 /=i;

//         if(num1%i != 0 && num2%i != 0) i++;
//     }

//     console.log(`LCM: ${lcm}`);
// }


//  Optimized aproach with O(log n)--
function getGCD(num1, num2) {
    while(num2!=0) {
        let temp = num2;
        num2 = num1%num2;
        num1 = temp;
    }

    return num1;
}

function printLCM(num1, num2) {
    let lcm = (num1*num2)/getGCD(num1,num2);

    console.log(`LCM of ${num1} & ${num2} is: ${lcm}`);
}

printLCM(2,3);
printLCM(10,10);
printLCM(10,12);
