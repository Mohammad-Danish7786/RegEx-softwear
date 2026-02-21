// 6. Sort an array of objects by age property.

// selection sort --
// function sortArray(arr) {
//     for(let i=0; i<arr.length; i++){
//         let minIdx = i;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[minIdx].age > arr[j].age){
//                 minIdx = j;
//             }
//         }
//         if(minIdx !== i){
//             [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
//         }
//     }
//     return arr;
// }

// bubble sort --
function sortArray(arr) {
    for(let i=0; i<arr.length; i++){
        let isSwapped = false;
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j].age > arr[j+1].age){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}

let data = [
  { name: "Aman", age: 28 },
  { name: "Riya", age: 22 },
  { name: "Kabir", age: 31 },
  { name: "Sneha", age: 25 },
  { name: "Arjun", age: 22 }
];

console.log(sortArray(data));
