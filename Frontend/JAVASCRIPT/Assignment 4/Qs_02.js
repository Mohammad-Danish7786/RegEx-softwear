// Convert String to UpperCase --

function toUpper(str) {
    let ans = "";
    for(char of str) {
        ans += char.toUpperCase();
    }

    return ans;
}

console.log(toUpper("hello world"));
