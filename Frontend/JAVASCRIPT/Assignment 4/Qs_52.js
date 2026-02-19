// Find the longest word in "JavaScript makes web development powerful".

function findLongestWord(str) {
    let words = str.split(" ");

    let large = "";
    for(let word of words) {
        if(large.length < word.length) large = word;
    }

    return large;
}

console.log(findLongestWord("JavaScript makes web development powerful"));
