function validateString(str){
    let n=str.length
    let i=0;
    flag =1;
    // arr=['(','{','[','"']
    // arr2=[')','}',']','"']

    const Obj={
        '{':'}',
        '(':')',
        '[':']'
    }
    for ( i; i<n/2; i++){
        for (j=0; j<3; j++){
            if (str[i]==Obj.key){
                if (str[n-(i+1)]!==Obj[key])
                flag=0
                break;
            }
        }
        if (flag==0){
            break
        }
    }
    if (flag===0){
        return false;
    }
    else {
        return true
    }
}

let str="{([]))";

console.log(validateString(str))
