// 8. Find the longest string in an array.

function getLongestString(arr) {
    let maxLenIdx = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i].length > arr[maxLenIdx].length){
            maxLenIdx = i;
        }
    }

    return arr[maxLenIdx];
}

let arr = ["hello", "good", "morning", "JavaScript", "C++"];

console.log(getLongestString(arr));
