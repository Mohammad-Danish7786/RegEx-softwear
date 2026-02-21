// 9. Find duplicate elements in an array.

// function findDuplicateEl(arr) {
//     return [... new Set(arr.filter((val, index) => arr.indexOf(val) != index))];
// }

function findDuplicateEl(arr) {
    let seen = new Set();
    let dup = new Set();

    arr.forEach(element => {
        if(seen.has(element)){
            dup.add(element);
        }else seen.add(element);
    });

    return [...dup];
}

let arr = [1,2,2,3,4,3,5,5,5,2];

console.log(findDuplicateEl(arr));
