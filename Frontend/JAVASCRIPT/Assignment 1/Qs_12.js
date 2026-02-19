// Palindrome Number Check --

function isPalindrome(num) {
    let revNum = 0;
    let temp = num;

    while(temp != 0) {
        let lastDigit = temp%10;
        revNum = revNum * 10 + lastDigit;
        temp = Math.floor(temp/10);
    }

    if(revNum == num) {
        console.log(`Given number ${num} is Palindrome`);
    }else {
        console.log(`Given number ${num} is not a palindrome!`);
    }
}

isPalindrome(121);
isPalindrome(123);
isPalindrome(42124);
