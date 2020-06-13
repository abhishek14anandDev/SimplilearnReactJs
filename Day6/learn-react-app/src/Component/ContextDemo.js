// import React from 'React';
// var contextD = React.createContext()

// class ContextDemo extends React.Component{
//     render(){
//         var msg = "Hello from root"
//         return(
//             <div>
//                 <h1>Context Demo</h1>
//                 {msg}
//                 <contextD.Provider value={msg}>
//                     <ChildComponent/>
//                 </contextD.Provider>
                
//             </div>
//         )
//     }
// }

// export default ContextDemo;

// class ChildComponent extends React.Component{
//     render(){
//         return(
//             <div>
//                 <contextD.Consumer>
//                     {x=> <input type="text" value="{x}"/>}
//                 </contextD.Consumer>
//             </div>
//         )
//     }
// }