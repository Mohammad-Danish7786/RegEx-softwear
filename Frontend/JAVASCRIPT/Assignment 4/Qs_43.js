// Replace "bad" with "good" in "This is bad".

function replaceStr(newWord, oldWord, str) {
    return str.replace(oldWord, newWord);
}

console.log(replaceStr("good", "bad", "This is bad"));
