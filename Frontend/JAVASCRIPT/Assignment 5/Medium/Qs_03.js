// 3. Find the sum of all numbers in an array.

function getSum(nums) {
    return nums.reduce((sum, num) => sum+num, 0);
}

let nums = [1,2,3,4,5];

console.log(getSum(nums));
