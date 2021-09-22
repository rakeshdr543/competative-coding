/**
 * @param {number} n
 * @return {number}
 */

 var climbStairs = function(n) {
    if(n==0 || n==1) return 1
    
    let first=1
    let second=2
    
    for(let i=3;i<=n;i++){
        let third=first + second
        first=second
        second=third
    }
    
    return second
};

// -------------------------------------
// /**
//  * @param {number} n
//  * @return {number}
//  */

//  function fib(n){
//     if(n<=1) return n
//     return fib(n-1)+fib(n-2)
// }

// var climbStairs = function(n) {
//     return fib(n+1)
// };