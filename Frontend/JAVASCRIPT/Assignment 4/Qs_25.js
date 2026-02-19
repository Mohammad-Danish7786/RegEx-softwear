// Extract middle 3 characters from "ReactJS".

function extractMidChar(str) {
    let mid = Math.floor(str.length/2);
    return str.substring(mid-1, mid+2);
}

console.log(extractMidChar("ReactJS"));
