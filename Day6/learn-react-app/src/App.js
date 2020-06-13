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
import RouteEx02 from './Component/RouteEx02';
import RouteEx03 from './Component/RouteEx03';
import ReduxEx02 from './Component/ReduxEx02';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';

// import ContextDemo from './Component/ContextDemo';

function App() {
  var s1 = {id:1,"name": "Abhishek","Course":"React"};
  var s2 = {id:1,"name": "Shobha","Course":"Excel"};

  var heading = "List of fruits";
  var fruits = ["Banana","Cherry","Pin Apple","Apple"];
  return (
   
 <div>
   {/* <RouteEx01/>
   <RouteEx02/>
   <RouteEx03/> */}
   {/* <ReduxEx02 msg="Redux demo 1"/>
   <ReduxEx02 msg="Redux demo 2"/> */}
  <RouteEx02/>
   {/* <ClickCounter />
    <HoverCounter /> */}

   {/* <ContextDemo/> */}
 </div>



  );
}

export default App;
