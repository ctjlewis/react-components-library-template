// const test = require('ava');
const path = require('path');
const defaultModule = require('../dist');
const subdirImport = require('../dist/TestButton');
const { TestHeading: namedImport } = defaultModule;

console.log({ defaultModule })
console.log({ subdirImport })
console.log({ namedImport });