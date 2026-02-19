// Second Largest Number (Without Sorting) --

function secondLargestNum(...num){
    if(num < 2){
        console.log("No second largest number!");
        return;
    }

    let max = -Infinity;
    let s_max = -Infinity;

    for(let i=0; i<num.length; i++) {
        if(num[i] > max) {
            s_max = max;
            max = num[i];
        }
        else if(num[i] > s_max && num[i] < max) s_max = num[i];
    }

    console.log(s_max);
}

secondLargestNum(2,8,7,9,5,1,6);
secondLargestNum(2,8,7,5,1,6);
secondLargestNum(2,8,5,1,6);
