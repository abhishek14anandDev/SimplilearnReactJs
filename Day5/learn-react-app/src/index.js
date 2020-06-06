import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyComponent1 from './Component/MyComponent1';




// ReactDOM.render(  <MyComponent1 msg = "Sending parameter from comp"/>,  document.getElementById('root') ); 
ReactDOM.render( <App/>,  document.getElementById('root') ); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
