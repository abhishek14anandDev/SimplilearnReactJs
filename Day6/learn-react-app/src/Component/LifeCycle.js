import React from 'react'

class LifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        console.log("Constructor, First methods in this stage");        
    }
    static getDerivedStateFromProps(props,state){        
        console.log("Second method  getDerivedStateFromProps call in this stage");                
        return null;        
    }
    componentDidMount(){
        console.log("This constructorDidMount is the 4th  method in this stage");
    }
    render(){
        return( <div>
            <h2>Component life cycle </h2>
            {console.log("This render is the 3rd method in this stage")}
        </div>
        )
    }
}

export default LifeCycle;