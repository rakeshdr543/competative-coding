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
 * Complete the 'maxPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY skillLevel
 *  2. INTEGER minDiff
 */

function maxPairs(arr, minDiff) {
     let answer = 0;
     let N=arr.length
 
        arr.sort();
 
        for (let i = 0; i < N; i++) {
            for(let j=i+1;j<N;j++){
            if (arr[j] - arr[i] > minDiff)
                answer+=1;
            }
        }
 
        return answer;
}

function main() {