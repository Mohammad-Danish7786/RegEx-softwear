// 01. Remove duplicate values from an array using array methods.

// function removeDuplicates(nums){
//     return nums.filter((val, index) => nums.indexOf(val) === index);
// }

function removeDuplicates(nums){
    return [... new Set(nums)];
}

let arr = [1,2,3,1,4,2];

console.log(removeDuplicates(arr));
