/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    let reverse=0
    let num=x
    
    while(num>0){
        reverse=reverse*10 + num%10
        num=Math.floor(num/10)
    }
    return reverse===x
};