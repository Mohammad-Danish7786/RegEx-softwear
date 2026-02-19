// Find the maximum of 10, 5, 8, 20.

function findMax(...nums) {
    let max = nums[0];
    for(let num of nums) {
        if(num>max) max = num;
    }
    return max;
}

console.log(findMax(10, 5, 8, 20));
console.log(findMax(100, 5, 8, 20));
