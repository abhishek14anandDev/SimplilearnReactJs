var display =()=>console.log("Hello, welcome to arrow functions")

display();

var wishes = (name)=>console.log(`hello ${name}`)

wishes("Abhishek")
wishes("Shobha")

var square = (x)=> x*x;

console.log(square(9));

var len = (words)=> words.length;

console.log(len("I ike you"));

var add = (a,b)=>a+b;
var big = (a,b)=>a>b?a:b;

console.log(add(5,6));
console.log(big(78,65));