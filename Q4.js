// Given a string, find the length of the longest substring without repeating characters.
let str="abcbca"

function longestSubstring(){
    let s=str[0],maxC=0,l=0
    //  console.log(str.indexOf(k)==-1)
    for (let i=0; i<str.length; i++){
        for (let j=i+1; j<str.length; j++){
            if (!s.includes(s[j])){
                s=s+str[j];
                // console.log(s)
            }
            else {
                return s.length;
            }

        }
    }

}

console.log(longestSubstring(str));