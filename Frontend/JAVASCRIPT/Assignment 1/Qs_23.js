// Find Smallest Number --

function printSmallestNum(...nums) {
    let min = nums[0];

    for(num of nums) {
        if(min > num) {
            min = num;
        }
    }

    console.log(`Smallest number is: ${min}`);
}

printSmallestNum(5,4,2,3,6);
