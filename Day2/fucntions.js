console.log("------------------------------IIFE(work like constructor)---------------------->")

// (function(){
//     console.log("Hello from functions IIFE");
// })();
(function(){
    console.log("Hello from IIFE");
})();

console.log("----------------Normal functions-------------")
// We can not import and export the noraml functions
function drawline(){
    var msg = '';
    for(let i=0;i<80;i++)
        msg+='-'
    console.log(msg);
}

function sayHello(){
    console.log('hello world');
}

drawline();
sayHello();
drawline();

console.log("----------------Parameterized functions-------------")

function display(name){
    console.log(`hello ${name}`);
}

display("Abhishek"); //valid

display("Abhsihek","Kiran"); // valid but 2nd one will be ignored

display() //no error // undefined it will say

console.log("----------------Fucntion returing values-------------")
function square(n){
    return n * n;
}

function Addition(a,b){
    return a+b;
}

console.log(`Addition is ${Addition(4,5)} and square is ${square(14)}`)


console.log("----------------Fucntion expression(FE)-------------")
console.log("----------------It can be exported and imported-------------")

var sayhello = function(){
    console.log("Hello");
}

var wishes = function(){
    var hour = new Date().getHours();

if(hour<12)
    console.log("Good morning");
else if(hour < 16)
    console.log("Good Evening");
else
    console.log("Good evening");
}

sayHello();
wishes();

console.log("---------------------Export and import---------------")

var m1 = require('./module1');

m1.sayHello();

m1.wishes();

console.log(m1.cube(12));
console.log(m1.big(45,89));

