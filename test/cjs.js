// const test = require('ava');
const path = require('path');
const defaultModule = require('../dist');
const subdirImport = require('../dist/TestButton');
const { TestHeading: namedImport } = defaultModule;
const singleFileExport = require('../dist/singleFileExport');

console.log({ defaultModule })
console.log({ subdirImport })
console.log({ namedImport })
console.log({ singleFileExport })