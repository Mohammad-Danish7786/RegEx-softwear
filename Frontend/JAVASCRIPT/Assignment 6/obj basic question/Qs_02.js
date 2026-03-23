// 2. Find the maximum number in an array without using Math.max().

function maximumNumber(nums) {
    let max = nums[0];
    for(let num of nums){
        if(max < num) max = num;
    }
    return max;
}

let nums = [42,42,53,1,353,233];
console.log(maximumNumber(nums));
