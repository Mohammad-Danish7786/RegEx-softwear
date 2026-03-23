// 6. Check if all elements in an array are numbers.

function isAllNumber(arr) {
    return arr.every(val => typeof val === 'number');
}


let arr = [13, 423, 534, 'hello', 203];

console.log(isAllNumber(arr));
