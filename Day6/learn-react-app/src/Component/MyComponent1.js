import React from 'react';

class MyComponent1 extends React.Component{
//state = {msg:'hello'}
state = {msg:'',style1:{}};
  sayHello(){
    this.setState({msg:"Hello i am set the state"});
  }
  getdDate(){
    this.setState(
      {msg: "Date : " + new Date().toLocaleDateString()}
    )
  }

  getTime(){
    this.setState(
      {
        msg: "TIme : "+ new Date().toLocaleTimeString()
      }
    )
  }

  getMessage(message){
    if(message =="date")
    {
      this.setState(
        {
          msg: "Date : " + new Date().toLocaleDateString(),
          style1:{"color":"green"}
        }
      ) 
    }
    else{
      this.setState(
        {
          msg: "TIme : "+ new Date().toLocaleTimeString(),
          style1:{"color":"Blue"}
        })
    }
  }

  // constructor(){
  //   super()
  //   this.state = {msg:'hello'}
  // }

  
  render(){
    var p1 = require("../Content/Images/Logo1.jpg");
    var p2 = require("../Content/Images/Logo2.jpg");
var title1 = "My company logo";
var title2 = "My wife company logo";
    return <div>
      {/* <h2>Event Handling Demo</h2>
      <button onClick={()=>this.sayHello()}>Say Hello</button> */}

      <h2>state demo</h2>
    <span style={this.state.style1}>{this.state.msg}</span>

    <h2>Event- handling using state</h2>
    <button onClick={()=>this.sayHello()}>change the sate val</button>
    <span style={this.state.style1}>{this.state.msg}</span>

    <input type="button" value="Date" onClick={()=>this.getMessage("date")}></input> <br/>
    <input type="button" value="TIme" onClick={()=>this.getMessage("time")}></input> <br/>
    <input type="button" value="Date" onClick={()=>this.getMessage("date")}></input> <br/>

    <h1>Image Demo</h1>
            <img src={p1} title={title1}></img>
            <img src={p2} title={title2}></img>
    </div>

    // <input type="radio" name=></input>
  }
}

export default MyComponent1;