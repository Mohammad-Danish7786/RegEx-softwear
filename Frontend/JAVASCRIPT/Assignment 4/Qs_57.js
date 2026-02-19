// Mask the last 4 digits of "1234567812345678" as "************5678".

function maskLastDigit(str) {
    return str.slice(-4).padStart(str.length, "*");
}

console.log(maskLastDigit("1234567812345678"));
