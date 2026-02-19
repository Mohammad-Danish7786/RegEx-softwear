// Find the type of NaN and check if a value is NaN.

function isNaN(val) {
    console.log(typeof val);
    console.log(Number.isNaN(val));
}

isNaN(NaN);
isNaN("hello");