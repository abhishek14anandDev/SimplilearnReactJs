import React from 'react';

class ArrayComp extends React.Component{
    state={items:[],heading:''}

    display(p){
        if(p == "fruits"){
            this.setState({items:["Apple","Banana","Cherry","Grapes"],heading:'List of fruits'});
        }else if(p=="vegy"){
            this.setState({items:["Onion","Carrot","Cabbage"],heading:"List of vegy"});
        }
    }
    render(){
        return<div>
            <h2>Array Example</h2>

            <button onClick={()=>this.display("fruits")}>Show fruits</button>
            <button onClick={()=>this.display("vegy")}>Show vegy</button>

            <h2>{this.state.heading}</h2>

            <ol>
    {this.state.items.map(x=><li>{x}</li>)}
            </ol>
        </div>
    }
}

export default ArrayComp