import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import logo from './icon.png';
import icon5 from './icon5.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon6 from './icon6.png';
import icon7 from './icon7.png';
import icon8 from './icon8.png';
import icon from './icon.jpg';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import bulb from './bulb.png';
import './learn.css'
import axios from 'axios';
import  { useCallback,useEffect, useState } from 'react'
import Quest from './Quest'

import{BrowserRouter, Route,Routes,Router,Link} from 'react-router-dom';



const token =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJRZ3BFVlNzVE9rR0RRamVFNVNLOUZ6dEVHQ254d2tuRyJ9.lA-IzBtRtwONpb5N-hZjnl9nPLjz2kjDRahXAtM8Euc';
const apiurl="https://api.dev.diksha.gov.in/api/content/v1/search";


  axios.interceptors.request.use(
  config => {
    config.headers.authorization =`Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)


function Learning() {

    const [coll,setcoll] = useState([]);
    const[arti,setarti] = useState([])
    const[vid,setvid] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false)
    };
    const handleShow = () => {setShow(true)
    console.log("Hello lux")
    };
  useEffect(()=>{
    fetch()
  })
  const fetch = useCallback(async () => {
    try{
    await axios.get(`https://api.dev.diksha.gov.in/api/collection/v1/hierarchy/do_2134773237963653121113`).then(res =>{
        setcoll(res.data.result.content.children);
        setarti(coll[0].children[0].artifactUrl);
        setvid(coll[0].children[1].artifactUrl)
        console.log("HEYYY",coll);
        
     })
    }catch(err){
      console.log(err.message);
    }
  })

 

  return (
    <div class='Container'>
        <div class='row'>
            <div class='col-4'>
            <div id="sidebar-wrapper" className="col-3">
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <a className='head-1'>
                    Fusion
                </a>
            </li><br/>
            <div className='sub-nav'>
            <li>
                <a href="#"><img src={icon2} width="20px" className='dash'/>Unit-1</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2} width="20px" className='dash' />Unit-2</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2} width="20px" className='dash'/>Unit-3</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2}width="20px" className='dash'/>Unit-4</a>
            </li><br/>
            <li>
                <a href="#"><img src={icon2} width="20px" className='dash'/>Unit-5</a>
            </li><br/>
            <button class="h5">Assess yourself!</button> 
            </div>
        </ul>
    </div>
    

            </div>
            <div class='col-6'>
            <div className='h1-p'>Let's Learn,</div>
                
                <h2 className='div-1-h'>Documents</h2>
                <br/><br/>
                <div class="cards">

    
   <a href={arti}>
  <div class="card c">
 <div class="card-body b">
        <div>
            <a><img src={pic2} className='pic'/>Unit 1 Pdf</a>
<br/>
   </div>
   </div>
</div></a>  
<a href={arti}>
  <div class="card c">
 <div class="card-body b">
        <div>
            <a><img src={pic1} className='pic1'/>Unit 2 Pdf</a>
<br/>
   </div>
   </div>
</div></a>  
<a href={arti}>
  <div class="card c">
 <div class="card-body b">
        <div>
            <a><img src={pic2} className='pic1'/>Unit 3 Pdf</a>
<br/>
   </div>
   </div>
</div></a>  

   </div>
   
               
                <h2 className='div-2-h'>Videos</h2>

                <div class="cards">
                
   <a href={vid}>
  <div class="card c">
 <div class="card-body b">
        {/* <iframe  src={con.children[1].artifactUrl}>
</iframe>  */}
<a><img src={icon} className='pic'/>Unit 1 Video</a>
<br/>
   </div>
   </div>
   
</a>  
<a href={vid}>
  <div class="card c">
 <div class="card-body b ">
        {/* <iframe  src={con.children[1].artifactUrl}>
</iframe>  */}
<a><img src={pic1} className='pic1'/>Unit 2 Video</a>
<br/>
   </div>
   </div>
   
</a>  
<a href={vid}>
  <div class="card c">
 <div class="card-body b ">
        {/* <iframe  src={con.children[1].artifactUrl}>
</iframe>  */}
<a><img src={pic2} className='pic1'/>Unit 3 Video</a>
<br/>
   </div>
   </div>
   
</a>  


   </div>

           <h2 className='h1-pp'>Assess</h2>     
           <div class='asses'>
           <Quest/>
          
           </div>
           
            </div>
            <div class="popup" id="myBox">
  <form action="/action_page.php" class="box-container">
    <h3>Do you want to refresh your memory?</h3>

    <button type="button" class="btn" onclick="closeBox()">Submit</button>
  </form>
</div>
        </div>
  
   <>
      <button class="open-button"  onClick={handleShow}></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-1"
      
      >
        <Modal.Header closeButton>
          <Modal.Title>Do you want to refresh your memory?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type="text" name="" id="inp-pop" placeholder="Enter a topic"/>
        </Modal.Body>
         <Modal.Footer>
          
          <Button className="btn3">Search</Button>
        </Modal.Footer> 
      </Modal>
    </>

    </div>
  )
}

export default Learning