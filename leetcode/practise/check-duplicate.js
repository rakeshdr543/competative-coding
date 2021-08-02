/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const arr=nums.sort()
    const n=arr.length
    let ans=false
    let temp=arr[0]
    for(let i=1;i<n;i++){
        if(temp === arr[i]){
            return true
        }else{
            temp=arr[i]
        }
    }
    return false
    
};