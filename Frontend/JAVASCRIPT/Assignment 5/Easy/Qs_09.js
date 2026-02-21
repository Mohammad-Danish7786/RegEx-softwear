// 9. Reverse an array without mutating the original array.

// function reverseArray(arr){
//     let revArr = [];
//     for(let i=arr.length-1; i>=0; i--){
//         revArr.push(arr[i]);
//     }
//     return revArr;
// }

function reverseArray(arr){
    return [...arr].reverse();
}

let arr = [1,2,3,4];

console.log(reverseArray(arr));
