var emp={"id":1001,"ename":"Anil","job":"Developer","salary":5500};
console.log ( emp );

for(var i in emp)
{
    console.log(i);
    console.log(`${i} = ${emp[i]}`);
}
 
var employee=[
    {"id":1001,"ename":"Anil","job":"Developer","salary":15500},
    {"id":1002,"ename":"Kiran","job":"Developer","salary":25500},
    {"id":1003,"ename":"Abhishek","job":"Developer","salary":35500},
    {"id":1004,"ename":"Hari","job":"Developer","salary":45500},
    {"id":1005,"ename":"Shobha","job":"Developer","salary":15500},
    {"id":1006,"ename":"Nirja","job":"Developer","salary":25500},
    {"id":1007,"ename":"Shalu","job":"Developer","salary":35500},
    {"id":1008,"ename":"Shibambi","job":"Developer","salary":45500},
    {"id":1009,"ename":"Anil","job":"Developer","salary":15500},
    {"id":10010,"ename":"Kiran","job":"Developer","salary":25500},
    {"id":10011,"ename":"Abhishek","job":"Developer","salary":35500},
    {"id":10012,"ename":"Hari","job":"Developer","salary":45500},
];

console.log(employee)