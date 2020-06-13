import React from 'react';

class PromptComp extends React.Component{
    state={msg:""}
    sayHello(){
        var name = prompt("Enter your Name");
        this.setState({msg: `${name}`})
    }
    render(){
        return <div>
<button onClick={()=>this.sayHello()}>PromptEx</button>
<p>{this.state.msg}</p>
        </div>
       
    }
}

export default PromptComp;