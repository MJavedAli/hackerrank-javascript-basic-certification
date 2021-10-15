'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function weekdayText(weekdays) {
    return function getText(target) {
        return weekdays[target] || (function () {
            throw new Error(`Invalid weekday number`)
        }());
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const weekdays = readLine().trim().split(' ');
    const getText = weekdayText(weekdays);
    try {
        const value = getText(parseInt(readLine().trim()));
        ws.write(value);
    } catch (e) {
        ws.write(`${e}`);
    }
}
