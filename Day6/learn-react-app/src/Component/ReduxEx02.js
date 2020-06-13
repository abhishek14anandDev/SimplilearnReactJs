import React from 'react';
import {store, increment,decrement} from './store1';
class ReduxEx02 extends React.Component{
    state={msg:'Hello'};
    increase(){
        store.dispatch(increment());
        this.setState({msg:store.getState()});
    }
    decrease(){
        store.dispatch(decrement());
        this.setState({msg:store.getState()});
    }
    render(){
        return <div>
            <h1>{this.props.msg} </h1>
            <p>State: {this.state.msg}</p> <hr/>
            <input type="button" value="Increment" onClick={()=>{this.increase()}} /> | 
            <input type="button" value="Decrement" onClick={()=>{this.decrease()}} /> 
        </div>
    }
}
export default ReduxEx02;