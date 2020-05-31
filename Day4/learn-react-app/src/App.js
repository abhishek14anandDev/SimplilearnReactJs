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


function App() {
  var s1 = {id:1,"name": "Abhishek","Course":"React"};
  var s2 = {id:1,"name": "Shobha","Course":"Excel"};

  var heading = "List of fruits";
  var fruits = ["Banana","Cherry","Pin Apple","Apple"];
  return (
    <div>
      <h1>App Component</h1>

      <EmpployeeDetails/>
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
