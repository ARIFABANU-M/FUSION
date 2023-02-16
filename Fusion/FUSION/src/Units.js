import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Collapse.css'
import Collapsible from './Collapsible';

function Units() {

  
return ( 
  <div>
    <div className="Main">
<div class="sidebar">
      <div className='sidebar-add'>
     <h1 className='h1-add'>Fusion</h1>
     
     </div>
     <Collapsible unit={"Unit-1"}/>
     <Collapsible unit={"Unit-2"}/>
     <Collapsible unit={"Unit-3"}/>
     <Collapsible unit={"Unit-4"}/>
    </div>
    </div>
    <div className='h1-txt'> 
    <h1 className='h1-vid'>Video Content</h1>
    <iframe src="http://www.africau.edu/images/default/sample.pdf" className='frame-pdf' frameBorder="1"></iframe>
    <h1 className='h1-vid'>Video Content</h1><iframe src="https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/assets/do_2134773120371752961108/4.mp4" className='frame-vid' frameBorder="1"></iframe>
    </div>
    </div>
  )
}

export default Units