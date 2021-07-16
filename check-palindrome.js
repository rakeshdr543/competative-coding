process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();

function checkPalindrome(str){
const n=str.length

for(let i=0;i<n/2;i++){

    if(str[i]!==str[n-1-i]){
       return console.log(0);
    
    }
}
return console.log(1)
}

function main() {
    const string = readline();

  // return the result
checkPalindrome(string)
}