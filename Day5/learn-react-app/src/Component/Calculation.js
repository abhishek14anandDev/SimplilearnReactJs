import React from 'react';

class Calculation extends React.Component{
    state = {msg:""}
    calculate(op){
        var a= Number( this.refs.a.value);
        var b = Number(this.refs.b.value);
        var msg="";

        switch (op){
            case "add":
                msg=`Addition of ${a} and ${b} is ${a+b}`;
            break;
            case "sub":
                msg=`Subtraction of ${a} and ${b} is ${a-b}`;
            break;
            case "mult":
                msg=`Multiplication of ${a} and ${b} is ${a*b}`;
            break;
            case "div":
                msg=`Division of ${a} and ${b} is ${a/b}`;
            break;
        }
        this.setState({msg:msg});
    }

    render(){
        return <div>
            <h2>EVent Handling : Calculation</h2>

            Enter num1: <input type="number" ref="a"></input>
            Enter num2: <input type="number" ref="b"></input>
            <button onClick={()=>this.calculate("add")}>Addition</button>
            <button onClick={()=>this.calculate("sub")}>Subtraction</button>
            <button onClick={()=>this.calculate("mult")}>Multiplication</button>
            <button onClick={()=>this.calculate("div")}>Division</button> <hr/>

            {this.state.msg}
        </div>
    }
}

export default Calculation;