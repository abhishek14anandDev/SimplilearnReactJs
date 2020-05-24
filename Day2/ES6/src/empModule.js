class Employee{
    constructor(ename,job,salary){
        this.ename = ename;
        this.job = job;
        this.salary = salary;
    }

    getDetails(){
        console.log(`${this.ename}, ${this.job}, ${this.salary}`)
    }
}

export default Employee ;