// Find the sum of all prime numbers up to N.

function isPrime(n){
    if(n<=1) return false;
    let i = 2;
    while(i*i<=n){
        if(n%i==0) return false;
        i++;
    }
    return true;
}

function sumOfPrime(n) {
    let sum = 0;
    while(n!=0){
        if(isPrime(n)) sum+=n;
        n--;
    }
    return sum;
}

console.log(sumOfPrime(10));
