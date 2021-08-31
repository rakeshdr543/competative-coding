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
 * Complete the 'nearlySimilarRectangles' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts 2D_LONG_INTEGER_ARRAY sides as parameter.
 */

function nearlySimilarRectangles(sides) {
    // Write your code here
    let res=0
    for(let i=0;i<sides.length;i++){
        for(let j=i+1;j<sides.length;j++){
         if(sides[i][0]*sides[j][1]===sides[i][1]*sides[j][0])   {
             res+=1
         }
        }
    }
    return res

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const sidesRows = parseInt(readLine().trim(), 10);

    const sidesColumns = parseInt(readLine().trim(), 10);

    let sides = Array(sidesRows);

    for (let i = 0; i < sidesRows; i++) {
        sides[i] = readLine().replace(/\s+$/g, '').split(' ').map(sidesTemp => parseInt(sidesTemp, 10));
    }

    const result = nearlySimilarRectangles(sides);

    ws.write(result + '\n');

    ws.end();
}
