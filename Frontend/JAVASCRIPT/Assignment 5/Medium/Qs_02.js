// 2. Multiply each element by 3 and return a new array.

function getNewArray(nums) {
    return nums.map(num => num*3);
}

let nums = [1,2,3,4,5];

console.log(getNewArray(nums));
