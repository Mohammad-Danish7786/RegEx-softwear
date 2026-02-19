// Convert "hello world" into "Hello World" (title case).

function capitalizeTitle(str) {
    let words = str.split(" ");
    words = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return words.join(" ");
}

console.log(capitalizeTitle("hello world"));
