// 7. Return only unique values using filter().

function getUniqueVal(arr) {
    return arr.filter((val, idx) => arr.indexOf(val) == idx);
}

let nums = [1,2,3,4,1,3,2,4];

console.log(getUniqueVal(nums));
