// 10. Find the index of the last occurrence of a value.

// function findLastIndex(arr, val) {
//     for(let i=arr.length-1; i>=0; i--){
//         if(val == arr[i]) return i;
//     }
//     return -1;
// }

function findLastIndex(arr, val) {
    return arr.lastIndexOf(val);
}

let arr = [1,42,6,2,31,6,42,52];

console.log(findLastIndex(arr, 6));
