// 9. Convert an array of objects into an object using reduce().

function convertArrToObject(arr) {
    return arr.reduce((obj, curr) => {
        obj[curr.id] = curr;
        return obj;
    }, {});
}

let users = [
  { id: 1, name: "Prince" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Sam" }
];

console.log(convertArrToObject(users));
