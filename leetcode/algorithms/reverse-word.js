/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(str) {
    return str.trim().split(/\s+/).map((s)=>{
        let returned=''
        for(let i=s.length-1;i>=0;i--){
            returned+=s[i]
        }
        return returned
    }).join(" ")
};