'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'maxCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. STRING_ARRAY labels
 *  3. INTEGER dailyCount
 */

function maxCost(cost, labels, dailyCount) {
    // Write your code here
    let lc=0
    let sum=0
    let max=0

for(let i=0;i<cost.length;i++){
    let v=labels[i]==='legal'?1:0
    console.log(v)
    lc=lc+v
    sum+=cost[i]
    if(lc===dailyCount){
        max=(sum>max)?sum:max
        lc=0
        sum=0
    }
}
return max
}
function main() {