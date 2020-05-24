// class Test{
//     display(){
//         console.log("Hello from diaply methos inside test class");
//     }
// }

// let o1 = new Test();
// o1.display();

class Student{
    setDetails(sname,course,fee){
        this.sname =sname;
        this.course = course;
        this.fee = fee;
    }

    getDetails(){
        console.log(`Name : ${this.sname}, Course : ${this.course}, fee : ${this.fee}`)
    }
}

let s1 = new Student();

s1.setDetails("Abhishek","React","19000");
s1.getDetails();
