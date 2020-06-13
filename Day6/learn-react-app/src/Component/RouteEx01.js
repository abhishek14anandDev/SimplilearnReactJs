import React from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import Help from './Help'
import About from './About'
import ContactUs from './ContactUs'

class RouteEx01 extends React.Component{
    render(){
        return(
            <div>
                <h1>Routing Demo</h1>
               
                <Router>
                <Link to="/">Home</Link>|
                <Link to="/help">Help</Link>|
                <Link to="/about">About</Link>|
                <Link to="/ContactUs">Contact Us</Link>
                    <Switch>
                        <Route path="/help">
                            <Help/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/contact">
                            <ContactUs/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RouteEx01;