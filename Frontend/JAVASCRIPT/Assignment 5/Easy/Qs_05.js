//  5. Check if at least one number in an array is negative.

// function hasNegativeNum(arr) {
//     for(let num of arr) {
//         if(num < 0) return true;
//     }
//     return false;
// }

function hasNegativeNum(arr) {
    return arr.some(val => val<0);
}

let nums = [1,24,2,-23,423];

console.log(hasNegativeNum(nums));
