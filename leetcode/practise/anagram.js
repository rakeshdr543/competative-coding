/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(str1, str2) {
    // Get lenghts of both strings
        let n1 = str1.length;
        let n2 = str2.length;
   
        // If length of both strings is not same,
        // then they cannot be anagram
        if (n1 != n2)
            return false;
   
        // Sort both strings
    let a1=str1.split('');
    let aa1=a1.sort()
    let r1=aa1.join('')
    
    let a2=str2.split('');
    let aa2=a2.sort()
    let r2=aa2.join('')
   
        // Compare sorted strings
        for (let i = 0; i < n1; i++)
            if (r1[i] != r2[i])
                return false;
   
        return true;
};