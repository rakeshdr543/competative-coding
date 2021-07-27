function sumDigitSquare(n){
    let sq=0
    
    while(n!=0){
        let digit=n%10
        sq+=digit*digit
         n = parseInt(n / 10, 10);
        
    }
    return sq
}

var isHappy = function(n) {
    while(true){
                    if (n == 1)
                return true;
 
            // Replace n with sum
            // of squares of digits
            n = sumDigitSquare(n);
 
            // Number is not Happy
            // if we reach 4
            if (n == 4)
                return false;
    }
};