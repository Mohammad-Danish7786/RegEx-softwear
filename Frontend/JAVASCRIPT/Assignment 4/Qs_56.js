// Convert "2026-02-05" into "05/02/2026" using string methods.

function convertString(str) {
    return str.split("-").reverse().join("/");
}

console.log(convertString("2026-02-05"));
