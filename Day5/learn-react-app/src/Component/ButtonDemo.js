import React from 'react';

class ButtonDemo extends React.Component{
    render(){
        return(
            <div className="container">
 <h1>BootStrap, button class </h1>
  <input type="submit" className="btn" />
  <input type="reset" className="btn" />
  <input type="button" value="click me" className="btn" /> <hr/>
 
<button className="btn btn-default">Default</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-info">Info</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-danger">Danger</button>
<button className="btn btn-link">Link</button> 
            </div>
        )
    }
}

export default ButtonDemo;