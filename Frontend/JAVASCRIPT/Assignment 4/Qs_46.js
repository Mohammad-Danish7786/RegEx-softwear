// Count how many times "a" appears in "JavaScript".

function countFreq(char, str) {
    let count = 0;
    str.toLowerCase().split("").forEach(element => {
        if(element==char) count++;
    });

    return count;
}

console.log(countFreq('a', "JavaScript"));
