// 1. Find the second largest number in an array.

function secondLargestNum(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let secondMax = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            secondMax = max;
            max = arr[i];
        }else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}

let nums = [300,1,3,42,4,13,45];

console.log(secondLargestNum(nums));
