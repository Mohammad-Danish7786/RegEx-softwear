// Remove all vowels from "JavaScript" using replace().

function removeVowel(str) {
    return str.replace(/[aeiouAEIOU]/g,"");
}

console.log(removeVowel("JavaScript"));
