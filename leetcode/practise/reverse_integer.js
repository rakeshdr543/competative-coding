/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(num) {
    let rev_num=0
    let nflag=false
    
    if(num<0){
        nflag=true
        num=-num
    }
    
    while(num>0){
        rev_num=rev_num*10 + num%10
        num = Math.floor(num/10)
    }
    
    if (rev_num >= 2147483647 ||
            rev_num <= -2147483648){
            rev_num = 0;
        return 0
    }
    
    if(nflag){
        return -rev_num
    }
    return rev_num
};