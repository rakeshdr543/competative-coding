/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayNesting = function(nums) {
    
    const visited={}
    
    const aux=(index)=>{
        if(visited[index]) return 0
        
        visited[index]=true
        
        return aux(nums[index])+1
    }
    
    let max=0
    
    nums.forEach((n,index)=>{
        if(!visited[index]){
            max=Math.max(max,aux(index))
        }
    })
    
    return max
};