// Sum from 1 to N --

function sum(n) {
    let sum = 0;
    let i = 1;
    while(i<=n) {
        sum += i;
        i++;
    }

    console.log(sum);
}

sum(10);
sum(30);
