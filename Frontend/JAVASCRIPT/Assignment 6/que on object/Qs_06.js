// 6. Flatten a deeply nested array.

function flattenArray(arr) {
    return arr.flat(Infinity);
}

let arr = [1,2,3, [true, [false]], ["hello", [1,3,4,[null, [undefined]]]]];

console.log(flattenArray(arr));
