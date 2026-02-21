// 5. Sort an array of numbers in ascending order.

// selection sort --
// function sortArray(nums) {
//     for(let i=0; i<nums.length; i++){
//         let minIdx = i;
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[minIdx] > nums[j]){
//                 minIdx = j;
//             }
//         }
//         if(minIdx !== i){
//             [nums[minIdx], nums[i]] = [nums[i], nums[minIdx]];
//         }
//     }

//     return nums;
// }

// bubble sort --
function sortArray(nums) {
    for(let i=0; i<nums.length; i++){
        let isSwapped = false;
        for(let j=0; j<nums.length-i-1; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }

    return nums;
}

let nums = [42,5,2,52,0,23,9];

console.log(sortArray(nums));
