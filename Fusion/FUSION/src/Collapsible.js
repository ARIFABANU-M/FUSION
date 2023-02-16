import React from 'react'
import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
 import './Collapse.css'
// import './ss-unit.css'
import icon2 from './icon2.png'


function Collapsible(props) {
    const[isOpen,setIsopen] = useState(false)

  return (
    
   <div class="sidebar">
  <button className="collapsible" onClick={()=>setIsopen(!isOpen)}><img src={icon2} width="20px"/>{props.unit} </button>
 {isOpen &&  
  <div className="content">
  <a href="###" className='cont '>Digital Content</a>
   <br/>
  <a href="#" className='cont'>Video lectures</a>
 </div>
 }       
    </div>
  )
}

export default Collapsible


