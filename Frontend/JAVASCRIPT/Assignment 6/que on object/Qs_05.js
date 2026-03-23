// 5. Find the difference between two arrays.

// function findDifference(arr1, arr2){
//     return arr1.filter((val) => !arr2.includes(val));
// }

function findDifference(arr1, arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    return [...arr1.filter((val) => !set2.has(val)), ...arr2.filter((val) => !set1.has(val))];
}

let arr1 = [1,3,4];
let arr2 = [1,2,4];

console.log(findDifference(arr1, arr2));
