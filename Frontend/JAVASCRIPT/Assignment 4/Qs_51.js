// Remove duplicate characters from "programming" using string methods.

function removeDupChar(str) {
    let res = "";
    for(let char of str) {
        res += (res.includes(char)) ? "" : char;
    }

    return res;
}

console.log(removeDupChar("programming"));
