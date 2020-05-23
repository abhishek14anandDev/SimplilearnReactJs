var i =1;

var msg =`Display number using while: `
//whilw loop
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
}while(i<=10);

console.log(msg);