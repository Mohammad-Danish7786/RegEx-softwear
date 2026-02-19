// Remove all special characters from "@J!a#v$a%S^c&r*i(p)t".

function removeSpecialChar(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "");
}

console.log(removeSpecialChar("@J!a#v$a%S^c&r*i(p)t"));
