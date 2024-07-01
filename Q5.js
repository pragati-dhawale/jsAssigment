// Given an array 'nums' of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

function product(arr){
    let p=[]
  for (let i=0; i<arr.length; i++){
      let a=1;
      for (j=i+1; j<arr.length; j++){
        a=a*arr[j];
      }
      for (k=0; k<i; k++){
        a=a*arr[k]
      }
    p.push(a)
    a=0;
  }
  return p;

}

let arr=[1,2,3,4,5];
console.log(product(arr))