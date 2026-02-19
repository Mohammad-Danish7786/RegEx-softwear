// find the length of string --

function findLength(str) {
    let len = 0;
    for(char of str) {
        len++;
    }
    return len;
}

console.log(findLength("JavaScript"));
