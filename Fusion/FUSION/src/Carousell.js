import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import bg3 from './bg3.jpg'
import sub8 from './sub8.jpeg'
import sub2 from './sub2.jpeg'
import sub3 from './sub3.jpeg'
import sub4 from './sub4.jpeg'
import sub5 from './sub5.jpeg'
import sub7 from './sub7.jpeg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import './index.css'
function Carousell() {
  return (
    <div>
        <Carousel slide={false} variant="dark" indicators={false}>
      <Carousel.Item>
      <div class="car-c">
        <div className="car-b">
      <Card style={{ width: '14rem', height:'14rem' , marginTop:'-20px',marginLeft:'60px', borderRadius:'15px',background:'#ddd0e7'}} >
      <Card.Img src={sub2} width="50px" className='top' />
      <Card.Body>
        <Card.Title className='sub'>Science</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    <Card style={{ width: '14rem',height:'14rem', borderRadius:'15px',background:'#ddd0e7'}}>
    <Card.Img src={sub4} width="50px" className='top' />
      <Card.Body>
        <Card.Title className='sub'>English</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    <Card style={{ width: '14rem',height:'14rem', marginLeft:'36.7rem',marginTop:'-16.5rem', borderRadius:'15px',background:'#ddd0e7'}}>
    <Card.Img src={sub5} width="50px" className='top' />
      <Card.Body>
        <Card.Title className='sub'>Computer Science</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card style={{width: '14rem',height:'14rem' , marginTop:'20px',marginLeft:'100px', borderRadius:'15px' ,background:'#ddd0e7'}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Img src={sub8} width="50px" className='top' />
      <Card.Body>
        <Card.Title className='sub'>Social Science</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <Card style={{width: '14rem',height:'14rem' , marginTop:'-224px',marginLeft:'340px', borderRadius:'15px',background:'#ddd0e7' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Img src={sub7} width="50px" className='top' />
      <Card.Body>
        <Card.Title className='sub'>Maths</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      </Carousel.Item>
      
    </Carousel>
    </div>
  )
}

export default Carousell