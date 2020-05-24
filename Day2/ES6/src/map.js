var fruits = ['banana','apple','grapes','cherry','papaya','mango'];

fruits.map(t=>console.log(t));

var employees = [
    {"id":1001,"ename":"Anil","job":"Developer","salary":15500},
    {"id":1002,"ename":"Kiran","job":"Developer","salary":25500},
    {"id":1003,"ename":"Abhishek","job":"Developer","salary":35500},
    {"id":1004,"ename":"Hari","job":"Trainer","salary":45500},
    {"id":1005,"ename":"Shobha","job":"Developer","salary":15500}
]

employees.map(t=>console.log(`${t.ename} working as ${t.job}`))

console.log(fruits.filter(t=>t.length ==5))

for ( let e of employees.filter(x=>x.job=="Trainer"))
    console.log(e);
var x =  employees.every(x=>x.salary>5000);
    console.log(x);

    if( employees.every(x=>x.salary>5000))
    console.log("All are eligible for loan");
else
    console.log("Some of them  are eligible for loan");

    
    if( employees.some(x=>x.job=="Trainer"))
        console.log("Some of them are Trainers");