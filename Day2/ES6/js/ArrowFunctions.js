"use strict";

var display = function display() {
  return console.log("Hello, welcome to arrow functions");
};

display();

var wishes = function wishes(name) {
  return console.log("hello " + name);
};

wishes("Abhishek");
wishes("Shobha");

var square = function square(x) {
  return x * x;
};

console.log(square(9));

var len = function len(words) {
  return words.length;
};

console.log(len("I ike you"));

var add = function add(a, b) {
  return a + b;
};
var big = function big(a, b) {
  return a > b ? a : b;
};

console.log(add(5, 6));
console.log(big(78, 65));