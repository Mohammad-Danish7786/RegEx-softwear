// 8. Convert an array into a key-value map object.

// function convertToObject(arr) {
//     let obj = {};
//     arr.forEach((val, index) => {
//         obj[index] = val;
//     });

//     return obj;
// }

// function convertToObject(arr) {
//     return {...arr};
// }

function convertToObject(arr) {
    return arr.reduce((prev, curr, index) => {
        prev[index] = curr;
        return prev;
    }, {});
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(convertToObject(arr));
