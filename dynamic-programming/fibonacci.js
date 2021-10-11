/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n<=1) return n
    
    function calc(counter,prev,current){
        if(counter>=n){
            return current
        }
        
        return calc(counter+1,current,prev+current)
    }
    return calc(1,0,1)
    
};