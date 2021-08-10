/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(a) {
    let n=a.length
    
    for(let i=0;i<n/2;i++){
        for(let j=i;j<n-i-1;j++){
            let temp=a[i][j]
            a[i][j]=a[n-1-j][i]
            a[n-1-j][i]=a[n-1-i][n-1-j]
            a[n-1-i][n-1-j]=a[j][n-1-i]
            a[j][n-1-i]=temp
        }
    }
    
};