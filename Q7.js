// Find the kth largest element in an unsorted array.

function kthLargest(arr,n){
    arr.sort();
    return arr[arr.length-n];

}

let arr=[1,5,3,6,8,9];
let k=3;
console.log(kthLargest(arr,k));