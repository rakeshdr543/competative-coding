/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let str = s.replace(/[^0-9A-Z]+/gi,"").toLowerCase();
    let n=str.length
    
    for(let i=0;i<n;i++){
        if(str[i]!==str[n-1-i]){
            return false
        }
    }
    
    return true
};