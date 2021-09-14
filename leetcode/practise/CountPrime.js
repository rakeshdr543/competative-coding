/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    let seen= new Uint8Array(n)
    let ans=0
    
    for(let num=2;num<n;num++){
        if(seen[num]) continue
        
        ans++
        
        for(let mul=num*num;mul<n;mul+=num){
            seen[mul]=1
        }
    }
      
      return ans
  };