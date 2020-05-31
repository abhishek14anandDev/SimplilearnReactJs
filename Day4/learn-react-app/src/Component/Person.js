import React from 'react';

class Person extends React.Component{
    render(){
        var p ={"id":1001,"name":"Abhsihek Anand","gender":"male",Age:27}
        return <div>
            <h2>Person Details</h2>
            Id: {p.id}<br/>
            Name: {p.name}<br/>
            Gender: {p.gender} <br/>
            Age: {p.Age}
        </div>
    }
}

export default Person;