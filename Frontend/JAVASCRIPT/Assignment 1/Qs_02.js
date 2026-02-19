// Number Type Check --

function typeCheck(num){
    if(num == 0) {
        console.log("Given number is zero");
    }
    else if(num > 0) {
        console.log("Given number is Positive!");
    }else {
        console.log("Given number is Negative!");
    }
}

typeCheck(20);
typeCheck(0);
typeCheck(-20);