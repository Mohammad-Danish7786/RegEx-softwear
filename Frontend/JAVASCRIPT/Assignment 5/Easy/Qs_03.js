// 3. Convert an array of strings to uppercase using an array method.

function convertToUpperCase(arr) {
    return arr.map(val => val.toUpperCase());
}

let arr = ['hello', 'good', 'morning', 'bye'];

console.log(convertToUpperCase(arr));
