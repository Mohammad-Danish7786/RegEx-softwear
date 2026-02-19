// Check if a number is a palindrome.

function isPalindrome(num) {
    let rev = 0;

    let temp = num;
    while(temp!=0){
        rev = rev * 10 + temp%10;
        temp = Math.floor(temp/10);
    }

    return rev === num;
}

console.log(isPalindrome(121));
console.log(isPalindrome(12));
