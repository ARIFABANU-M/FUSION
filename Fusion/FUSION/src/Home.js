import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import know from './knowledge.png';
import book from './books.png';
import share from './share.png';
import subg from './subg.jpeg';
import student from './student.png';
import teacher from './teacher.png';
import tutor from './tutor1.png';
import parent from './family.png';
import './homo.css';

function Home() {
  return  (
    <div className='back'>
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand navb f" href="#">Fusion</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navhm">
        <li class="nav-item ">
          <a class="nav-link navit1" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link navit1" href="#">Pricing</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link navit1" href="#">Documentation</a>
        </li>
        <li class="nav-item ">
        <button class="btn btnnav" type="submit">Login</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
<h1 className='h1hm'>Stuck in illusion?<br></br> Let's find a solution!</h1>
<button className='btnstart'>Get Started</button>
<div className='div-2'>
<h1 className='h1sub'>Learning is easy now</h1>
<div class="container text-center cont">
  <div class="row align-items-start">
    <div class="col-4">
      <img src={know} height="150px" width="150px"/>
      <h5 className='hcon'>Analayze your knowledge</h5>
    </div>
    <div class="col-4">
    <img src={book} height="150px" width="150px"/>
      <h5 className='hcon'>Customize your library</h5>
    </div>
    <div class="col-4">
    <img src={share} height="150px" width="150px"/>
      <h5 className='hcon'>Share with your friends</h5>
    </div>
  </div>
</div>
</div>
<hr className='line'
        style={{
          background: '#1dd24a',
          color: '#1dd24a',
          height: '1.5px'
        }}
      />
<br></br>
<div class="container text-center cont2">
  <div class="row align-items-start">
    <div class="col-3">
     <img src={subg} width="400px" height="300px"/>
    </div>
    <div class="col-9">
    <h5 className='subtxt'>Fusion is a unique blend of social learning and new-age learning
methodologies designed to deliver best-in-class learning experience
to students.Easy and user-friendly access through out the app along
with analysis of each test helping students to achieve their goals.</h5>
<button className='btnstart1'>Get Started</button>
    </div>
  </div>
</div>
<br></br>

<hr
        style={{
          background: '#1dd24a',
          color: '#1dd24a',
          height: '1.5px',
        }}
      />
<div class="container text-center cnt-1">
<h1 className='h1sub1'>Recommended for </h1>
  <div class="row align-items-start">
  
    <div class="col-4">
    <img src={student} width="150px" height="150px"/>
    <br></br>
    <h5 className='hcon'>STUDENT</h5>
    </div>
    <div class="col-4">
    <img src={parent} width="150px" height="150px"/>
    <br></br>
    <h5 className='hcon'>PARENT</h5>
    </div>
    <div class="col-4">
    <img src={teacher} width="150px" height="150px"/>
    <br></br>
    <h5 className='hcon'>TEACHER</h5>
    </div>
  </div>
</div>

<div class="container text-center cnt-4">
  <div class="row align-items-start">
    <div class="col-4">
    <h3><span className='abt'>About</span>Fusion</h3>

      <p class="footer-links">
        <a href="#" class="link-1">Home |</a>
        
        <a href="#">Blog |</a>
      
        <a href="#">Pricing |</a>
      
        <a href="#">About |</a>
        
        <a href="#">Faq |</a>
        
        <a href="#">Contact |</a>
      </p>

    </div>
    <div class="col-4">
    <div class="footer-center">

<div>
  <i class="fa fa-map-marker"></i>
  <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
</div>

<div>
  <i class="fa fa-phone"></i>
  <p>1.555.555.5555</p>
</div>

<div>
  <i class="fa fa-envelope"></i>
  <p><a href="mailto:support@company.com">support@company.com</a></p>
</div>

</div>

    </div>
    <div class="col-4">
    <div class="footer-right">

<p class="footer-company-about">
  <span>About the app</span>
  Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
</p>


</div>    
    </div>
  </div>
</div>

    </div>
  )
}

export default Home