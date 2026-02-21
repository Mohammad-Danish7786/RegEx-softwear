// 7. Find the first element greater than 50.

// function firstGreaterElement(nums, val){
//     for(let num of nums) {
//         if(num > val) return num;
//     }

//     return -1;
// }

function firstGreaterElement(nums, val){
    return nums.find(num => num > val) ?? -1;
}

let nums = [1, 42, 52, 53, 2, 32];

console.log(firstGreaterElement(nums, 50));
