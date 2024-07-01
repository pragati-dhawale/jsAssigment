// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

let arr=[1,4,6,5,3];
let target=9;
let flag=0;
let i=1,j=0;
for (i=1; i<arr.length;i++){
    for (j=0; j<arr.length; j++ ){
         if (arr[i]+arr[j]==target){
            flag=1;
            break;
         }
    }
    if (flag==1){
        console.log(i,j)
        break;
    }
}

