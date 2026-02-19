// Check if "MongoDB" contains "SQL".

function isSubString(subStr, str) {
    return str.includes(subStr);
}

console.log(isSubString("SQL", "MongoDB"));
