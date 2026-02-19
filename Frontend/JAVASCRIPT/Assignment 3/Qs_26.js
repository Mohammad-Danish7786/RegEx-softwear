// Check if a number is prime.

function isPrime(num) {
    if(num <= 1) return false;

    let i = 2;
    while(i*i<=num) {
        if(num%i==0) return false;
        i++;
    }

    return true;
}

console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(10));
