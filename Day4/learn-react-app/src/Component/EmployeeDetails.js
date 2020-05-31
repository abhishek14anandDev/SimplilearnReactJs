import React from 'react';

class EmpployeeDetails extends React.Component{
    state={
        employees:[
            {"id":1001,"ename":"Abhishek","job":"developer"},
            {"id":1002,"ename":"Shobha","job":"CRM"},
            {"id":1003,"ename":"Ashish","job":"Banker"},
            {"id":1001,"ename":"Dipali","job":"reporter"}
        ]
    }
    getRowById(id){
        var e = this.state.employees.find ( x=>x.id==id);
        
        this.refs.id.value = e.id;
        this.refs.ename.value = e.ename;
        this.refs.job.value = e.job;
    }

    deleteRowById(id){
        var index = this.state.employees.findIndex(t=>t.id == id);
        var employees = this.state.employees;
        if(window.confirm("Are you sure?"))
            employees.splice(index,1)
        this.setState({employees:employees})
    }

    AddEmployee(){
        var e = {
            id:this.refs.id.value,
            ename:this.refs.ename.value,
            job:this.refs.job.value
        }

        var employees = this.state.employees;
        employees.push(e);

        this.setState({employees:employees});
        this.clearAll();
    }

    EditEmployee(){
        var id = this.refs.id.value;

        var e= {
            id: this.refs.id.value,
            ename: this.refs.ename.value,
            job: this.refs.job.value
        }

        var index = this.state.employees.findIndex(t=>t.id == id);

        var employees = this.state.employees;

        employees[index] = e;

        this.setState({employees:employees});
    }



    clearAll(){
        this.refs.id.value =this.refs.ename.value = this.refs.job.value ='';
    }

    render(){
        return <div>
            <h2>Employee Details Component</h2>
           
            <table border="1">
                <tr>
                    <th>id</th> <th>Ename</th> <th>Job</th>
                </tr>

                {this.state.employees.map(t=>
                    <tr>
                        <td>{t.id}</td> <td>{t.ename}</td> <td>{t.job}</td> <td><button onClick={()=>this.getRowById(t.id)}>Select</button></td> |
                        <td><button onClick={()=>this.deleteRowById(t.id)}>delete</button></td> 
                    </tr>)}
            </table> Employees count :{this.state.employees.length}
            
            Id: <input type="number" ref="id"></input>
            Ename: <input type="text" ref="ename"></input>
            Jobrole: <input type="text" ref="job"></input>


            <button onClick={()=>this.clearAll()}>Clear All</button>
            <button onClick={()=>this.AddEmployee()}>Add Employee</button>
            <button onClick={()=>this.EditEmployee()}>Edit Employee</button>
        </div>
    }
}

export default EmpployeeDetails