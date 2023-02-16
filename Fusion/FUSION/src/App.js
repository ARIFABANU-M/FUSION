import React, { Component }  from 'react';
import './hack.css';
import{BrowserRouter, Route,Routes,Router} from 'react-router-dom';
import Home from './Home';
import Course from './Course';
import Units from './Units';
import Test from './Test';
import Pdf from './Pdf';
import Frame from './Frame';
import Vid from './Vid';
import Learning from './Learning';
import Ass from './Ass'
import Pythn from './Pythn';


function App() {
  return (
  <div className="App">
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Course/>}/>
    <Route path="/units" element={<Units/>}/>
    <Route path="/pdf" element={<Frame/>}/>
    <Route path="/vids" element={<Vid/>}/>
    <Route path="/Learn" element={<Learning/>}/>
    <Route path="/test" element={<Ass/>}/>
    <Route path="/addi" element={<Pythn/>}/>
    {/* <Route path="/asses" element={<Mcq/>}/> */}
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
