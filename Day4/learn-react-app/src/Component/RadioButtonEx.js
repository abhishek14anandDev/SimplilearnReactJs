import React from 'react';

class RadioButtonEx extends React.Component{
    state ={p1:"",title1:""};
    // var p1 = require("../Content/Images/Logo1.jpg");
    // var p2 = require("../Content/Images/Logo2.jpg");
    getImage(p){
        if(p=="me"){
            this.setState({
                p1: require("../Content/Images/Logo1.jpg"),title1:"My Comapny logo"
            });
        }else{
            this.setState({
                p1: require("../Content/Images/Logo2.jpg"),title1:"My Wife company logo"
            });
        }
    }
    render(){
        return <div>
                <h2>radio button, ex01</h2>

                <input type="radio" name="image" onChange={()=>this.getImage("me")} /> My Company
                <input type="radio" name="image" onChange={()=>this.getImage("wife")} /> My Wife Company<hr/>

<img src={this.state.p1} title={this.state.title1}></img>
        </div>
    }
}

export default RadioButtonEx;