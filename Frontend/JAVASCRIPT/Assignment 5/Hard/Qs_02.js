// 2. Chunk an array into smaller arrays of given size.

// function chunkArray(arr, chunk) {
//     let ans = [];
//     let size = Math.ceil(arr.length/chunk);

//     while(size > 0){
//         let temp = [];
//         for(let i=0; i<chunk; i++){
//             if(arr.length == 0) break;
//             temp.push(arr[0]);
//             arr.shift();
//         }
//         ans.push(temp);
//         size--;
//     }
//     return ans;
// }

function chunkArray(arr, chunk) {
    let ans = [];
    for(let i=0; i<arr.length; i+=chunk) {
        ans.push(arr.slice(i, i+chunk));
    }
    return ans;
}

let nums = [1,2,3,4,5,6,7,8,9];

console.log(chunkArray(nums, 3));
