// Replace "World" with "JavaScript" in "Hello World".

function replaceWord(newword, word, str) {
    return str.replace(word, newword);
}

console.log(replaceWord("JavaScript", "world", "Hello world"));
