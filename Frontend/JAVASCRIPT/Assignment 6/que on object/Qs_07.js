// 7. Count total price from a cart array using reduce().

function reduceArr(prices) {
    return prices.reduce((prev, curr) => prev + curr, 0);
}

let prices = [1,2,3,4,5];

console.log(reduceArr(prices));
