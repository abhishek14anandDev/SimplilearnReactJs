var hour = new Date().getHours();

if(hour<12)
    console.log("Good morning");
else if(hour < 16)
    console.log("Good Evening");
else
    console.log("Good evening");

var day = new Date().getDay(); //it will give in 0 to 6 0->Sunday 6->Saturday

if(day == 0 || day == 6)
    console.log("today is weekend! Hurray!!!")
else
    console.log("today we have to work")