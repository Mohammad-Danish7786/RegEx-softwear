// Factorial of a Number --

function factOfNum(num) {
    let fact = 1;
    while(num>1) {
        fact *= num;
        num--;
    }

    return fact;
}

console.log(factOfNum(5));
console.log(factOfNum(4));
console.log(factOfNum(3));
