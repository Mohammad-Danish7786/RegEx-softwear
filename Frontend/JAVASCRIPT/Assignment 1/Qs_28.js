// Prime Factors of a Number --

function isPrime(num) {
    if(num <= 1) return false;
    let i=2;
    while(i*i<=num) {
        if(num%i==0) return false;
        i++;
    }

    return true;
}

function printPrimeFactor(num) {
    console.log("Prime factors of ", num + ": ");

    let i = 2, n = num;
    while(i*i<=n) {
        if(isPrime(i)){
            while(n%i == 0){
                console.log(i);
                n= n/i;
            }
        }
        i++;
    }

    if(n>1){
        console.log(n);
    }
}

printPrimeFactor(2)
printPrimeFactor(4)
printPrimeFactor(7)
printPrimeFactor(9)
