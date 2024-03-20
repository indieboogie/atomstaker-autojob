const atomstaker_notif = require('atomstaker-notif');
const atomstaker_autojob = require('atomstaker-autojob');
const async = require('async');
const web3_utils = require('web3-utils');
const sequelize = require('sequelize');
const jsonwebtoken = require('jsonwebtoken');
const mocha = require('mocha');
const react_redux = require('react-redux');
const redux = require('redux');
const body_parser = require('body-parser');
const passport = require('passport');

const path = require('path');
console.log(`The extension of index.js is ${path.extname('index.js')}`);

const myURL = new URL('https://example.org/foo?bar=baz');
console.log(`Pathname: ${myURL.pathname}`);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Enter your name: ', name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});

// Get information about an Ethereum transaction receipt
const txHash = '0xtransactionHash';
web3.eth.getTransactionReceipt(txHash).then(receipt => {
  console.log('Transaction receipt:', receipt);
}).catch(err => {
  console.error('Error getting transaction receipt:', err);
});

setTimeout(() => {
    console.log('This will log after 2 seconds');
}, 2000);

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Server started on http://localhost:3000'));

const name = 'Node.js';
console.log(`Hello, ${name}!`);

// Convert a string to title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
console.log('Title case:', toTitleCase('hello world'));

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}
const myRectangle = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${myRectangle.area()}`);

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});

const words = ['spray', 'limit', 'elite', 'exuberant'];
const result = words.filter(word => word.length > 6);
console.log(`Filtered words: ${result}`);