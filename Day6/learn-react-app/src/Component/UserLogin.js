import React from 'react'
import { Redirect } from 'react-router-dom';

class UserLogin extends React.Component{
    state={msg:'',status:false}
    validateUser(){
        var uname = this.refs.uname.value;
        var pwd = this.refs.pwd.value;
        if ( uname==="Abhishek" && pwd==="1234" ){
            this.setState({msg:'Credentials found correct...'});
            this.setState({status:true});
        }
            
        else
            this.setState({msg:'Invalid input credentials'});
    }

    render(){
        if ( this.state.status)
            return <Redirect to ="/dashboard" />

        return (
            <div>
                 <h2>User Login</h2>
                 <input type="text" placeholder="User Name" ref="uname" /> <br/>
                 <input type="password" placeholder="Password" ref="pwd" /> <br/>
                 <button onClick={()=>this.validateUser()}>Login</button> 
                 <button type="reset">Reset</button> <br/>
                 {this.state.msg}
            </div>

        )
    }
}
export default UserLogin;