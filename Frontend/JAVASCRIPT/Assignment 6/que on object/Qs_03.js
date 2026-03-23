// 3. Remove an element at a specific index without mutating the array.

function removeElement(arr, idx) {
    return [...arr.slice(0,idx), ...arr.slice(idx+1)];
}

let arr = [1,2,3,4,5,6];

console.log(removeElement(arr, 3));
