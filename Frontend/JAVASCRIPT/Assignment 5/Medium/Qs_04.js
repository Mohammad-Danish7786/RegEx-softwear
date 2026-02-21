// 4. Remove falsy values (false, 0, "", null, undefined, NaN) from an array.

function removeFalsyVal(arr) {
    return arr.filter(val => (val));
}

let arr = [1,3,0,3,null, 2, "", 23, false, 2, undefined];

console.log(removeFalsyVal(arr));
