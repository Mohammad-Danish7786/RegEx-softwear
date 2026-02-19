// Find the first non-repeating character in "aabbccddeffg".

function firsNonRepeatingChar(str) {
    for(let char of str) {
        if(str.indexOf(char) == str.lastIndexOf(char)) return char;
    }

    return null;
}

console.log(firsNonRepeatingChar("aabbccddeffg"));

