// Prime Number Check --

function isPrimeNum(num) {
    if(num <= 1) {
        console.log("Given number ${num} is not a prime number!");
        return;
    }

    let i = 2;
    while(i<num){
        if(num%i == 0){
            console.log(`Given Number ${num} is not a prime number!`);
            return;
        }
        i++;
    }

    console.log(`Given number ${num} is prime number!`);
}

isPrimeNum(2);
isPrimeNum(3);
isPrimeNum(4);
isPrimeNum(6);
isPrimeNum(91);