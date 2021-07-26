/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(arr) {
    let n=arr.length;
     for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                   console.log([arr[i],arr[j],arr[k]])
                }
            }
        }
    }
};