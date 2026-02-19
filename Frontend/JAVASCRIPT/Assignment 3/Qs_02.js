// Convert a string "123.45" into a number using different methods.

function convertToNum(val) {
    // return Number(val);
    // return parseFloat(val);
    return +val;
}

console.log(typeof convertToNum("123.45"));
