// Check whether "madam" is a palindrome using string methods.

function isPalindrome(str) {
    return str == str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
