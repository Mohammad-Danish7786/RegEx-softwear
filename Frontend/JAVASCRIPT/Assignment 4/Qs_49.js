// Check if two strings "abc" and "ABC" are equal (ignore case).

function isEqual(str1, str2) {
    return str1.toLowerCase() == str2.toLowerCase();
}

console.log(isEqual("abc", "ABC"));
