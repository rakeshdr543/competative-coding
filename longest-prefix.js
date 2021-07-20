var longestCommonPrefix = function(a) {
    
    let n=a.length
    
    if(n===0){
        return ""
    }
    if(n===1){
        return a[0]
    }
    
    a.sort()
    
    let end=Math.min(a[0].length,a[n-1].length)
    
    let i=0
    
    while(i<end && a[0][i]===a[n-1][i]){
        i++
    }
    
   let pre=a[0].substring(0,i)
   
   return pre
};