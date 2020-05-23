var day = new Date().getDay(); //it will give in 0 to 6 0->Sunday 6->Saturday

switch(day){
    case 0:
        console.log("today is sunday");
        break;
    case 1:
        console.log("today is monday");
        break;
    case 6:
        console.log("today is Saturday");
        break;
}