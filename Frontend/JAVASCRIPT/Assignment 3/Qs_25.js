// Find the factorial of a number.

function getFactorial(num) {
    if(num==1 || num==0) return 1;

    return num * getFactorial(num-1);
}

console.log(getFactorial(5));
