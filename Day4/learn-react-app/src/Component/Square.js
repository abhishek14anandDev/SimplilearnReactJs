import React from 'react';

class Square extends React.Component{
    render(){
        var n = this.props.n;

        return <div>
            <h1>Square of {n} is : </h1>
            <p>{n * n}</p>
        </div>
    }
}

export default Square;