/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let n=nums.length
    let ra=nums.slice(n-k,n)
    let la=nums.slice(0,k)
    nums=[...la,...ra]
    return [...ra,...la]
};