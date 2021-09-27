/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
   
    const solve=(start,end)=>{
        if(start>end) return -1
        
         let mid=Math.floor((start+end)/2)
         
         if(nums[mid]==target){
             return mid
         }
        
        if(nums[mid]<target){
             return solve(mid+1,end)
         }
             return solve(start,mid-1)
    }
       
    return solve(0,nums.length-1)
 };