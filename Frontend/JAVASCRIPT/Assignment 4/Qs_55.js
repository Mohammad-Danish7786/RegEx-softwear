// Count the number of words in " I love JavaScript " after removing extra spaces.

function getCountofWords(str) {
    return str.trim().split(" ").length;
}

console.log(getCountofWords(" I love JavaScript "));
