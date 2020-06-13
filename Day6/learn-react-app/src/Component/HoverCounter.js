import React, { Component } from 'react';
 
import UpdatedComponent from './HocComponent';
class HoverCounter extends Component {
    
    render() {
        var {count,incrementCount} =this.props; 
        return (
            <div >
                <h1 onMouseOver={()=>incrementCount()}>Mouse Hover Counter Component</h1>
                Mouse hover {count} times
            </div>
        );
    }
}
 
export default UpdatedComponent (HoverCounter);
