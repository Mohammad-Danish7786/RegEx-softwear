// Use substr() to extract 5 characters starting from index 2 in "JavaScript".

function extractChar(start, count, str) {
    return str.substr(start, count);
}

console.log(extractChar(2,3, "JavaScript"));
