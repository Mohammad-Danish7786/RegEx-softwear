// Divisible by 3 and 5 --

function isDivisible(num) {
    if(num%3==0 && num%5==0){
        return true;
    }

    return false;
}

console.log(isDivisible(20));
console.log(isDivisible(15));

