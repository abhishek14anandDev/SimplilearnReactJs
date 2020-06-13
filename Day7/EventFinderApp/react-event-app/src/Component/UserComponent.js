import React from 'react';
import '../../src/login.css'
import { Redirect } from 'react-router-dom';

class UserComponent extends React.Component{
    state={msg:'',status:false}
    validateUser(){
        var uname = this.refs.uname.value;
        var pwd = this.refs.pwd.value;
        
        if ( uname==="Abhishek" && pwd==="1234"){
            this.setState({msg:'Credentials found correct...'});
            this.setState({status:true});
        }
            
        else
            this.setState({msg:'Invalid input credentials'});
    }
    render(){
        if ( this.state.status)
            return <Redirect to ="/dashboard" />
        return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
  
                    <div className="fadeIn first">
                        <img src="https://miro.medium.com/max/600/1*nWFPcxzUnuGEQxICHfGhSQ.png" id="icon" alt="User Icon" />
                    </div>

    
                   <div>
                        <input type="text" id="login" className="fadeIn second" name="login" ref="uname" placeholder="login"/>
                        <input type="password" id="password" className="fadeIn third form-control psswd" name="password" ref="pwd" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={()=>this.validateUser()}/>
                        </div>

   
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                    <div className="alert alert-danger">
                         <strong>{this.state.msg}</strong>
                    </div>

                </div>
            </div>
        )
    }
}

export default UserComponent