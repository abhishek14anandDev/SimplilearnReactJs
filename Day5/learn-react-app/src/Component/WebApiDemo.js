import React from 'react';

class WebApiDemo extends React.Component{
    state = {people:[]}
    componentDidMount(){
        var url = "http://localhost:3000/people";

        fetch(url)
        .then(response=>response.json())
        .then(response=>this.setState({people:response}))
        
    }

    componentDidUpdate(){
        var url = "http://localhost:3000/people";
        fetch(url)
            .then(response=>response.json())
            .then(response => this.setState({people:response}));            
    }   


    AddPeople(){
        let person = {
            "id": Number(this.refs.id.value),
            "pname":this.refs.name.value,
            "gender":this.refs.gender.value,
            "age":Number(this.refs.age.value)
        };
        let url = "http://localhost:3000/people";
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(person)
        })
        .then(response=>response.json())
        .then(() => this.setState({msg:'Row added....'})); 

    }

    EditPeople(){
        let person = {
            "id": Number(this.refs.id.value),
            "pname":this.refs.name.value,
            "gender":this.refs.gender.value,
            "age":Number(this.refs.age.value)
        };
        let url = `http://localhost:3000/people/${person.id}`;
        fetch(url,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(person)
        })
        .then(response=>response.json())
        .then(() => this.setState({msg:'Row updated....'}));        
    }

    Deletepeople(){        
        let id =Number(this.refs.id.value);
    let url = `http://localhost:3000/people/${id}`;
    fetch(url,{
        method:'DELETE'
    })
    .then(response=>response.json())
    .then(() => this.setState({msg:'Row deleted....'}));        
}


    render(){
        var people = this.state.people;
        return(
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th> <th>Name of the employee</th> <th>Gender</th> <th>age</th>
                        </tr>
                    </thead>

                    <tbody>
                    {people.map(p => <tr><td>{p.id}</td>
                                <td>{p.pname}</td>
                                <td>{p.gender}</td>
                                <td>{p.age}</td>
                </tr>
                )}
                    </tbody>
                </table>

                Id: <input type="number" ref="id"/>
            Name: <input type="text" ref="name"/>
            Gender: <input type="text" ref="gender"/>
            Age: <input type="number" ref="age"/>

            <button onClick={()=>this.AddPeople() } className="btn btn-success">Add People</button>
            <button onClick={()=>this.EditPeople() } className="btn btn-success">Edit People</button>
            <button onClick={()=>this.Deletepeople() } className="btn btn-success">Delete People</button>{this.state.msg}

           
            </div>
        )
    }
}

export default WebApiDemo;