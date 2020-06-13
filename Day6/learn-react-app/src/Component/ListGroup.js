import React from 'react'

class ListGroup extends React.Component{
    
    render(){
        var fruits=['Apple','Banana','Cherry','Grapes','Mango']
        return (
            

            <div>
                <h2>List Group Items</h2>
    <div className="row">
        <div className="col-lg-3">
            <ul className="list-group">
                <li className="list-group-item">Telugu</li>
                <li className="list-group-item">English</li>
                <li className="list-group-item">Hindi</li>
                <li className="list-group-item">Tamil
                      <span className="badge">Optional</span>
                </li>
            </ul>
        </div>

        <h2>List Group Items</h2>
    <div className="row">
        <div className="col-lg-3">
            <ul className="list-group">
              {fruits.map(x=> <li className="list-group-item">{x}</li>)}
                
            </ul>
        </div>
    </div>

    </div>

            </div>
        )
    }
} 

export default ListGroup