import React from 'react';
class InputComp extends React.Component{

    state ={msg:''}
    sayHello(p){
        var name = this.refs.ename.value;
        if(p =="msg")
            this.setState({msg: `${name}`})
        else if(p=="len")
            this.setState({msg:`${name.length}`})
        else if(p =="upper")
        this.setState({msg:`${name.toUpperCase()}`})
    }
    render(){
        return <div>
<h2>Event Handling 08</h2>
<input type="text" ref="ename"></input> <br/>
<button onClick={()=>this.sayHello("msg")}>show name</button>
<button onClick={()=>this.sayHello("len")}>show name</button>
<button onClick={()=>this.sayHello("upper")}>show name</button>
<p>{this.state.msg}</p>
        </div>
    }
}

export default InputComp;