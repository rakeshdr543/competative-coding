/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack=[]
    
    const paired={
        '[':']',
        '{':'}',
        '(':')'
    }
    
    const isPaired=(a,b)=>paired[a]===b
    
    for(c of s){
        if(isPaired(stack[stack.length-1],c)){
            stack.pop()
        }else{
            stack.push(c)
        }
    }
    
    return stack.length===0
};