// Trim spaces only from the end of "React ".

function removeSpacesFromEnd(str) {
    return str.trimEnd() + "hello";
}

console.log(removeSpacesFromEnd("React  "));
