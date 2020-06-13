import React from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import Help from './Help'
import About from './About'
import ContactUs from './ContactUs'
import EmpployeeDetails from './EmployeeDetails'
import People from './People'
import WebApiDemo from './WebApiDemo'

class RouteEx02 extends React.Component{
    render(){
        return(
            <div>
                <h1>Routing Demo</h1>
               
                <Router>
                <Link to="/">Home</Link>|
                <Link to="/employees">EmpployeeDetails</Link>|
                <Link to="/people">People</Link>|
                <Link to="/WebApiDemo">WebApiDemo</Link>|
               
                    <Switch>
                        <Route path="/employees">
                           <EmpployeeDetails/>
                        </Route>
                        <Route path="/people">
                            <People/>
                        </Route>

                        <Route path="/WebApiDemo">
                            <WebApiDemo/>
                        </Route>

                        <Route path="notfound"></Route>
                        {/* <Route path="/contact">
                            <ContactUs/>
                        </Route> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RouteEx02;