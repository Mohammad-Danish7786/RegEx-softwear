// 4. Find the intersection of two arrays.

// function intersectionOfArr(arr1, arr2){
//     return arr1.filter((val) => arr2.includes(val));
// }

function intersectionOfArr(arr1, arr2){
    let set2 = new Set(arr2);
    return arr1.filter((val) => set2.has(val));
}

let arr1 = [1,3,4];
let arr2 = [1,2,4];

console.log(intersectionOfArr(arr1, arr2));
