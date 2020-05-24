var employee = require("./EmployeeModule").employees;

for(let emp of employee)
{
    console.log(emp);
}

var employee2 = [
    {"id":1001,"ename":"Anil","job":"Developer","salary":15500},
    {"id":1002,"ename":"Kiran","job":"Developer","salary":25500},
    {"id":1003,"ename":"Abhishek","job":"Developer","salary":35500},
    {"id":1004,"ename":"Hari","job":"Developer","salary":45500},
    {"id":1005,"ename":"Shobha","job":"Developer","salary":15500}
]
console.log("-----------------------------------------------------------")
employee2.unshift({
    "id":1000,"ename":"Ashish","job":"Developer","salary":15500
})//insert at first

employee2.push({
    "id":1006,"ename":"Dipali","job":"Developer","salary":15500
})////insert at first

for(let emp of employee2)
{
    console.log(emp);
}

console.log("--------------Delete 1st one-------------------------")

employee2.shift();
for(let emp of employee2)
{
    console.log(emp);
}
console.log("--------------Delete last one-------------------------")
employee2.pop();
for(let emp of employee2)
{
    console.log(emp);
}

console.log("--------------Specific position element you want to delete-------------------------")
//employee2.splice(2,1);
for(let emp of employee2)
{
    console.log(emp);
}

console.log("--------------Specific position element you want to insert-------------------------")
employee2.splice(2,2,{ id: 1008, ename: 'Karan', job: 'Developer', salary: 25500 });
for(let emp of employee2)
{
    console.log(emp);
}