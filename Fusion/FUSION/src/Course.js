import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Todo.css';
import logo from './icon1.png';
import icon5 from './icon5.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon6 from './icon6.png';
import icon7 from './icon7.png';
import icon8 from './icon8.png';
import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import bg3 from './bg3.jpg'
import bg4 from './bg4.jpg'
import book from './book.png'
import bulb from './bulb.webp'
import didyk from './didyk.jpg'
import {FaBars} from "react-icons/fa";
import API from "./API"
import Carousell from './Carousell';
import Todo from './Todo';
import BarChart from "./BarChart";
// import LineChart from "./LineChart";
// import PieChart from "./PieChart";

function Course() {

const[isOpen,setIsOpen] = useState(false); 
const toggle = () => setIsOpen(!isOpen);
const [userData, setUserData] = useState({
    labels: ["Science","English","Tamil","Maths","Social"],
    datasets: [
      {
        label: "Level",
        data: [10,25,20,45,50],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
function functest(){

}
return (
 <div id="wrapper" className="container">
    <div id="sidebar-wrapper" className="col-3" style={{width:isOpen?"235px":"110px"}}>
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <div className='bars' style={{width:isOpen?"300px":"110px"}}>
                <FaBars onClick={toggle}/>
                <a className='head-1' style={{display:isOpen?"block":"none"}}>
                 Fusion
                </a>
                </div>
                
            </li><br/>
            <li>
                <a href="#"><img src={logo} width="20px"className='dash4'/>Dashboard</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon5} width="20px" className='dash4' />Home</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon7} width="20px" className='dash4'/>Libraries</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2}width="20px" className='dash4'/> courses</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon4} width="20px" className='dash4'/>Assessment</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon8} width="20px" className='dash4'/>Logout</a>
            </li><br/>
        </ul>
    </div>
    
       <div className='div-2' style={{marginLeft:isOpen?"30px":"-210px"}}>
        <div>
            <div>
                <h1 className='h1-cors'>Hi Lee</h1>
                <span className='h1-cors-1'>Welcome back,you are doing great</span>
                <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" class="search_icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></a>
        </div>
      </div>
    </div>
            </div>
            <div className='todo'>
                <Todo/>

            </div>
            <div className='didyk'>
            <img src={bulb} width="20px" className='dash1'/>
            <img src={didyk} width="20px" className='dash2'/>
            <div className='know'>
            
                <API/>
            </div>
            </div>
            <div className='car-1'>
                <div className='h1-cors-2'>My courses</div>
            <Carousell/> 
            </div>
            <br/>
            <div className='graph'>
            <div style={{ width: 700 }} className="Bar-quest-d">
        <BarChart chartData={userData} />
      </div>
            </div>
            <h1 className='h1-cors-3'>Assesments</h1>
          <span className='h2-ass'>Hey here are your assesments to be taken</span>
        </div>
        <br/>
<div className='assess'>
<div className='assess-1'>
<h1 className='as-2'>Mathematics</h1>
<h3 className='as-0'>Revision 1</h3>
<button className='btn6' onClick={functest}>+</button>
</div>
<br></br>
 <div className='assess-1'>
<h1 className='as-2'>Social Science</h1>
<h3 className='as-1'>Assessment 2</h3>
<button className='btn6'>+</button>
</div>
<br></br>
<div className='assess-1'>

                <h1 className='as-2'>Science</h1>
                <h3 className='as-3'>Practise test 1</h3>
                <button className='btn6'>+</button>
            </div>
            <br></br>
        </div>
       </div>

   
</div>

  )
}

export default Course