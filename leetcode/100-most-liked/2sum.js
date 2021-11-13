/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const s={}
    
    for(let i=0;i<nums.length;i++){
        let cur_sum=target-nums[i]
        
        if(s.hasOwnProperty(cur_sum)){
            return [s[cur_sum],i]
        }else{
            s[nums[i]]=i
        }
    }
};