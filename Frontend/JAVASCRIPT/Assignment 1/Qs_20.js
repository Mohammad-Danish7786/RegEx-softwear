// Fibonacci Series --

function generateFibonacci(n) {
    if(n<=0) return;

    if(n==1){
        console.log("0");
        return;
    }

    let fiboSeries = [0, 1];
    
    let i = 0;
    while(i<n-2){
        fiboSeries.push(fiboSeries[i] + fiboSeries[i+1]);
        i++;
    }

    console.log(fiboSeries.join(" "));
}

generateFibonacci(1);
generateFibonacci(2);
generateFibonacci(4);
generateFibonacci(6);
generateFibonacci(7);
