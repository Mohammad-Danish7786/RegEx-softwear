// Convert "apple,banana,orange" into a string with | instead of ,.

function replaceStr(newChar, oldChar, str) {
    return str.replaceAll(oldChar, newChar);
}

console.log(replaceStr('/', ',', "apple,banana,orange"));
