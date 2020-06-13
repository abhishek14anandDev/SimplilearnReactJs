import React from 'react'
import {Link} from 'react-router-dom'

class UserDashboard extends React.Component{
    render(){
        return (
            <div>
               <h1>I am in dashboard page</h1> 
               <br/>
               <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
export default UserDashboard;