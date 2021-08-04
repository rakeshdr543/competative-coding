/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(a) {
    let n=a.length
   
    for(let i=n-1;i>=0;i--){
        if(a[i]!==9){
            a[i]+=1
            break
        }else{
            a[i]=0
        }
    }
    
    if(a[0]===0){
        let arr=[1,...a]
        return arr
    }

    return a
};