/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    const solve=(low,high)=>{
        if(low>high){
            return low
        }
        let mid=Math.floor((low+high)/2)
        
        if(nums[mid]==target) return mid
        
        if(nums[mid]>target){
            return solve(low,mid-1)
        }
        return solve(mid+1,high)
    }
    
   return solve(0,nums.length-1)
};