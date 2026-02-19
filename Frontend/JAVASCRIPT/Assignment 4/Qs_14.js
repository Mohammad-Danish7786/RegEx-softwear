// Replace all spaces with hyphens in "web development course".

function replaceSpace(char, str) {
    return str.replaceAll(" ", char);
}

console.log(replaceSpace('-', "web development course"));

