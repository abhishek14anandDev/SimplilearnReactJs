import React from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import UserLogin from './UserLogin'
import UserDashboard from './UserDashboard'
import NotFound from './NotFound'

class RouteEx03 extends React.Component{
    render(){
        return (
            <div>
            <h1>Routing Demo</h1>
           
            <Router>
            <Link to="/">Home</Link>|
            <Link to="/login">Login</Link>|
            {/* <Link to="/people">People</Link>| */}
           
            <Switch>
                    <Route exact path="/login">
                        <UserLogin />
                    </Route>
                    <Route exact path="/dashboard">
                        <UserDashboard />
                    </Route>
                    <Route component={NotFound} />
 
                </Switch>

            </Router>
        </div>
        )
    }
}
export default RouteEx03;