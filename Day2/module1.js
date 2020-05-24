
// (function(){
//     console.log("Hello from IIFE");
// })();
var message = 'Message from module';
var msg1 ='Confidential message';

module.exports.message1 = message;//message1 you can give anything this is just a name
module.exports.msg2 = msg1; //

module.exports.sayHello = function(){
    console.log("Hello");
}

module.exports.wishes = function(){
    var hour = new Date().getHours();

if(hour<12)
    console.log("Good morning");
else if(hour < 16)
    console.log("Good Evening");
else
    console.log("Good evening");
}

module.exports.cube = function(n){
    return n * n * n;
}

module.exports.big = function(a,b){
    return a>b?a:b;
}

