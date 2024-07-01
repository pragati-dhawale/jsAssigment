// // Given a string, find the length of the longest substring without repeating characters.
// let str="abcbca"

let str = "abcbcadefg";

function longestSubstring() {
    let s = ""; 

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (!s.includes(str[j])) { 
                s = s + str[j]; 
            } else { 
                break; 
                return s.length;
            }
        }
    }
    return s.length; 
}

console.log(longestSubstring(str));
