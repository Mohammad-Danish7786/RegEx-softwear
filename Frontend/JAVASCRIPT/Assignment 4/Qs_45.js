// Capitalize the first letter of "hello" using string methods.

function capitalizeStr(str) {
    let words = str.split(" ");
    words = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return words.join(" ");
}

console.log(capitalizeStr("hello world"));

