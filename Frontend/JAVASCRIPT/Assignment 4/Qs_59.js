// Check whether "abc123" is an alphanumeric string.

function isAlphaNum(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

console.log(isAlphaNum("abc123"));
