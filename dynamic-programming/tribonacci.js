/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    if(n<2) return n
      
      let a=0
      let b=1
      let c=1
      let d
      
      while(n-->2){
          d=a+b+c
          a=b
          b=c
          c=d
      }
      
      return c
  };