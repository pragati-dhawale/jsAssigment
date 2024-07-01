// Given n non-negative integers representing the heights of walls, find the maximum area of water that can be trapped between the walls.
function maxArea(arr){
    mA=0;
    l=0;
    for (let i=0; i<arr.length; i++){
        l=i*arr[i];
        if (l>mA){
            mA=l;
        }
    }
    return mA;
}

let arr=[1,8,6,2,5,4,8]
console.log(maxArea(arr))