// 1. From an array of numbers, return only even numbers.

function getEvenNumber(nums) {
    return nums.filter(val => val%2 === 0);
}

let arr = [1,2,3,4,5,6];

console.log(getEvenNumber(arr));
