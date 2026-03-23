// 4. Count how many times each element appears in an array.

function countFreq(arr) {
    let freq = {};

    for(let val of arr) {
        if(freq[val]) freq[val]++;
        else freq[val] = 1;
    }

    return freq;
}

let arr = [1,2,23,4,2,1,4];

console.log(countFreq(arr));
