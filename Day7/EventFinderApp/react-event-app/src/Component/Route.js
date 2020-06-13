import React from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import UserComponent from './UserComponent'
import EventManager from './EventManager'


class EventRoute extends React.Component{
    render(){
        return (
            <div>
            <h1>Routing Demo</h1>
           
            <Router>
            
            <Link to="/login">Login</Link>|
            {/* <Link to="/people">People</Link>| */}
           
            <Switch>
                    <Route exact path="/login">
                        <UserComponent/>
                    </Route>
                    <Route exact path="/dashboard">
                      <EventManager/>
                    </Route>
                    
 
                </Switch>

            </Router>
        </div>
        )
    }
}
export default EventRoute;