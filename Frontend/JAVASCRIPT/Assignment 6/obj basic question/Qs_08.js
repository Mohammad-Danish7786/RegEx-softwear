// 8. Convert a nested array into a single-level array.

function convertTosingleArray(arr) {
    return arr.flat(Infinity);
}

let arr = [1, 23, 54, [234, 52, 'hello'], [true, false, [23, "ewo"]]];

console.log(convertTosingleArray(arr));
