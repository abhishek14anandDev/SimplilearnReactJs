import React from 'react';
//Functional component example

// function MyComponent1(props){
//   var heading ='Functional Components';
//   var msg = 'I am learning react'
//     return <div>
//       <h1>{heading}</h1>
//       <p>{props.msg}</p>
//     </div>
//   }

//   export default MyComponent1;

class MyComponent1 extends React.Component{
  render(){
    var headings = this.props.headings;
    var items = this.props.items;
    return<div>
      <h1>list of {headings}</h1>
      <ol>
        {/* // {items.map(x=><li>{x}</li>)} */}
      </ol>
    </div>
  }
}

export default MyComponent1;