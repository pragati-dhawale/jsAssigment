// Write a function to check if a given string is a palindrome.

function isPalindrome(n){
    a=n.split('').reverse().join('');
    if(a==n){
        return "Palindrome"
    }
    else {
        return "Not Palindrome"
    }
}

let a="naman"

console.log(isPalindrome(a));