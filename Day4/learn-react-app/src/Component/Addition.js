import React from 'react';

class Addition extends React.Component{
    render(){
var num1 = this.props.a;
var num2 = this.props.b;

var msg = `Add of ${num1} and ${num2} is ${num1 + num2}`;

return <div>
    <h2>Addition demo : </h2>
    <p>{msg}</p>
</div>
    }
}

export default Addition;