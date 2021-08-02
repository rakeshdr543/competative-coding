/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(arr) {
    const n=arr.length
    let temp=arr[0]
    for(let i=1;i<n;i++){
      temp=temp ^ arr[i]
    }
    return temp
};