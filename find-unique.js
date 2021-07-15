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


function main() {
    const x = parseInt(readline());
    var nums = readline().split(" ").map(x => parseInt(x)); 
    
    let temp = nums[0];

  // start a loop for all elements
  for (let i = 1; i < nums.length; i++) {

    // xor the element with the previous result
    temp = temp ^ nums[i];
  }

  // return the result
  console.log(temp);
}