import React from 'react';

class RadioButtonGender extends React.Component{
    
   state={msg:'',gender:'',style:{}};
   setGender(gender){
       this.setState({"gender":gender});
   }

   display(){
    var name = this.refs.ename.value;
       if(this.state.gender =="m")
            this.setState({msg:`Hello mr ${name}`, style:{"Color":"blue"}})
        else
            this.setState({msg:`Hello miss ${name}`, style:{"Color":"pink"}})
   }
    render(){
        
        return <div>
           <h1>Event handling 09</h1>
           Enter name: <input type="text" ref="ename"></input> 
            <input type="radio" name="gender" onChange={()=>this.setGender("m")}/> male
            <input type="radio" name="gender" onChange={()=>this.setGender("f")}/> female

            <button onClick={()=>this.display()}>display</button>
            <span style={this.state.style}>{this.state.msg}</span>
        </div>
    }
}

export default RadioButtonGender;