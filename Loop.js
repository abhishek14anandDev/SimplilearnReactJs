var i =1;

var msg =`Display number using while: `
//whilw loop //entry control loop
while(i<=10){
    //console.log(`${i}`);
    msg+=`${i} `
    i++;
}

console.log(msg);

var msg = `Display msg using Do-while: `

i=1;
do{
    msg+=`${i} `;
    i++;
}while(i<=10); // exit control loop.

console.log(msg);

//for loop
console.log(i) //in case of let error
for(var i=0;i<=10;i++)
    console.log(i);

console.log(i); ////in case of let error