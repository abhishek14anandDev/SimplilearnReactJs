import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MyComponent1 from './Component/MyComponent1';
import Square from './Component/Square';
import Addition from './Component/Addition';
import Student from './Component/Student';
import Person from './Component/Person';
import People from './Component/People';
import ImageLabel from './Component/imageLabel';
import RadioButtonEx from './Component/RadioButtonEx';
import PromptComp from './Component/PromptComp';
import InputComp from './Component/InputComp';
import Calculation from './Component/Calculation';
import RadioButtonGender from './Component/RadioButtonGender';
import ArrayComp from './Component/ArrayComp';
import EmpployeeDetails from './Component/EmployeeDetails';
import ButtonDemo from './Component/ButtonDemo';
import ListGroup from './Component/ListGroup';
import Formsdemo from './Component/FormDemo';
import LifeCycle from './Component/LifeCycle';
import WebApiDemo from './Component/WebApiDemo';
import RouteEx01 from './Component/RouteEx01';

function App() {
  var s1 = {id:1,"name": "Abhishek","Course":"React"};
  var s2 = {id:1,"name": "Shobha","Course":"Excel"};

  var heading = "List of fruits";
  var fruits = ["Banana","Cherry","Pin Apple","Apple"];
  return (
    <div className="container">
      <h1>Root Component</h1>
  <div className="row">
          <div className="visible-lg">
            <h1>Currently Large Screen, You can see 4 columns per row</h1>
          </div>
          <div className="visible-md">
                  <h1>Currently Medium Screen, You can see 3 columns per row</h1>
          </div>
          <div className="visible-sm">
                  <h1>Currently Small Screen, You can see 2 columns per row</h1>
          </div>
          <div className="visible-xs">
            <h1>Currently Extra Small Screen, You can see 1 columns per row</h1></div>
          </div> 
 
<div className="row">
  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">      
          <div className="greenBorderClass"> <h3>Div1: First Column </h3>   </div>    
  </div>
 
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">                  
          <div class="greenBorderClass"> <h3>Div2:Second Column </h3>   </div>     
  </div>
 
  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">                  
          <div className="greenBorderClass"> <h3>Div3: Third Column </h3>   </div>     
  </div>
 
  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">                  
      <div className="greenBorderClass"> <h3>Div4:Fourth Column </h3>   </div>     
  </div>        
 
</div>
<RouteEx01/>
{/* <ButtonDemo/>
<ListGroup/>
      <EmpployeeDetails/>
      <Formsdemo/>
      <LifeCycle/>
      <WebApiDemo/> */}
      {/* <ArrayComp/>
      <RadioButtonGender/>
      <Calculation/>
      <InputComp/>
<PromptComp/>
      <RadioButtonEx/>
     <ImageLabel ></ImageLabel>
      <MyComponent1/>
      <Square n ="9"/>
      <Square n ="10"/>
     <Addition a="12" b = "23"></Addition>
     <Addition a="34" b = "45"></Addition>
     <Student s ={s1}/>
     <Student s ={s2}/>

     <MyComponent1 heading ={heading} items={fruits}/> }
     <Person/>
     <People/> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
