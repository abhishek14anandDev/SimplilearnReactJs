import React, { Component } from 'react';
import UpdatedComponent from './HocComponent';
 
class ClickCounter extends Component {
   
    render() {
        var {count,incrementCount} = this.props;
        return (
            <div>
                <h1>Button Click Counter Component</h1>
                <button onClick={()=>incrementCount()}>Increment</button>
                {count}
            </div>
        );
    }
}
 
export default UpdatedComponent( ClickCounter);
