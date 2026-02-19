// Strong Number Check --

function factOf(num) {
    if(num==0 || num==1) return 1;

    let fact = 1;
    while(num!=1){
        fact *= num;
        num--;
    }

    return fact;
}

function isStrongNum(num) {
    let n = num;
    let sum = 0;

    while(n!=0){
        let digit = n%10;
        sum += factOf(digit);
        n = Math.floor(n/10);
    }

    if(num == sum && num != 0) {
        console.log(`Given Number ${num} is a strong Number!`);
    }else {
        console.log(`Given Number ${num} is not a strong Number!`);
    }
}

isStrongNum(145)
isStrongNum(1)
isStrongNum(2)
isStrongNum(3)
