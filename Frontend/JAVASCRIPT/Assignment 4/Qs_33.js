// Check if "frontend" includes "Front" (case-sensitive).

function includeStr(subStr, str) {
    return str.includes(subStr);
}

console.log(includeStr("Front", "frontend"));
