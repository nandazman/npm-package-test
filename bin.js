#!/usr/bin/env node

const yargs = require('yargs')

console.log(yargs.argv)

const fs = require('fs');

let rawdata = fs.readFileSync('component.json');
let student = JSON.parse(rawdata);
console.log(student);