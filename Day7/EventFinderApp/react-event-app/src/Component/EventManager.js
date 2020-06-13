import React from 'react';

class EventManager extends React.Component{
    state = {events:[]}
    componentDidMount(){
        var url = "http://localhost:3000/events";

        fetch(url)
        .then(response=>response.json())
        .then(response=>this.setState({events:response}))
        
    }

    componentDidUpdate(){
        var url = "http://localhost:3000/events";
        fetch(url)
            .then(response=>response.json())
            .then(response => this.setState({events:response}));            
    }   


    AddEvents(){
        let event = {
            "id": Number(this.refs.id.value),
            "eventName":this.refs.eventName.value,
            "location":this.refs.location.value,
            "guest":this.refs.guest.value,
            "date":this.refs.date.value
        };
        let url = "http://localhost:3000/events";
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(event)
        })
        .then(response=>response.json())
        .then(() => this.setState({msg:'Row added....'})); 

    }

    EditEvents(){
        let event = {
            "id": Number(this.refs.id.value),
            "eventName":this.refs.eventName.value,
            "location":this.refs.location.value,
            "guest":this.refs.guest.value,
            "date":this.refs.date.value
        };
        let url = `http://localhost:3000/events/${event.id}`;
        fetch(url,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(event)
        })
        .then(response=>response.json())
        .then(() => this.setState({msg:'Row updated....'}));        
    }

    DeletEvents(){        
        let id =Number(this.refs.id.value);
    let url = `http://localhost:3000/events/${id}`;
    fetch(url,{
        method:'DELETE'
    })
    .then(response=>response.json())
    .then(() => this.setState({msg:'Row deleted....'}));        
}


    render(){
        var event = this.state.events;
        return(
            <div className="container">

                
            Id: <input type="number" ref="id"/>
            eventName: <input type="text" ref="eventName"/>
            location: <input type="text" ref="location"/>
            guest: <input type="text" ref="guest"/>
            date: <input type="date" ref="date"/>

            <button onClick={()=>this.AddEvents() } className="btn btn-success">Add Events</button>
            <button onClick={()=>this.EditEvents() } className="btn btn-success">Edit Events</button>
            <button onClick={()=>this.DeletEvents() } className="btn btn-success">Delete Event</button>{this.state.msg}
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th> <th>Name of the event</th> <th>location</th> <th>guest</th> <th>date</th>
                        </tr>
                    </thead>

                    <tbody>
                    {event.map(p => <tr><td>{p.id}</td>
                                <td>{p.eventName}</td>
                                <td>{p.location}</td>
                                <td>{p.guest}</td>
                                <td>{p.date}</td>
                </tr>
                )}
                    </tbody>
                </table>


           
            </div>
        )
    }
}

export default EventManager;