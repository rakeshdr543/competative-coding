/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(arr) {
    let n=arr.length
    let count=0
    
    for(let i=0;i<n;i++){
        if(arr[i]!==0){
            arr[count++]=arr[i]
        }
    }
     
     while(count<n){
         arr[count++]=0
     }
 };