// class test{
//     constructor(){
//         console.log("Object instatiation")
//     }
// }

// let o1 = new test();
// let o2 = new test();

class Person{
    constructor(name, gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    getdetails(){
        console.log(`Name : ${this.name}, Gender : ${this.gender}, age : ${this.age}`)
    }
}

let p1 = new Person("Abhishek","male",28)
let p2 = new Person("Shobha","female",30)

p1.getdetails();
p2.getdetails();

class Test{
    constructor(){
         this.len = (name) => name.length;
         this.upper = (name) => name.toUpperCase();
         this.lower = (name) => name.toLowerCase();
         this.firstName = name => name.substr(0,name.indexOf(' '));
         this.lastName = name => name.substr(name.lastIndexOf(' ')+1);
    }   
   }
   let o1 = new Test();
   console.log ( o1.len("Kiran Kumar"));
   console.log ( o1.upper("Kiran Kumar"));
   console.log ( o1.lower("Kiran Kumar"));

   console.log(o1.firstName("Abhsihe Anand"))
   console.log(o1.lastName("Abhsihe Anand"))

class test3{
    display(name = "no name"){
        console.log(name);
    }


}

let ji = new test3();
ji.display("Abhishek")


class calculations{
    static square(n){
        return n*n;
    }
}

console.log(calculations.square(5));

