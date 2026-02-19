// Count Vowels in a String --

function countVowels(str){
    let vowel = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let count = 0;

    for(let ch of str){
        if(vowel.has(ch)) count++;
    }

    console.log("Count of vowel: ", count);
}

countVowels("hello good morning");
