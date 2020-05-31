import React from 'react';

class Student extends React.Component{
    render(){
        var s= this.props.s;
        return <div>
<h1>The student details is : </h1>
    <p>id is : {s.id}</p>
    <p>name is : {s.name}</p>
    <p>Course is : {s.Course}</p>
  
        </div>
    }
}

export default Student;