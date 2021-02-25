import React from 'react';
import {apt1} from '../images/apt1.jpg';
import {apt2} from '../images/apt2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Carousel} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap';

const Home = () => {
 
return(
 
    
<div>



<div>
<Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src='https://cdn.vox-cdn.com/thumbor/MFQLpHmnFrma-qGt9zq8qJ6UU-c=/0x0:1000x668/1200x800/filters:focal(420x254:580x414)/cdn.vox-cdn.com/uploads/chorus_image/image/62947990/285_5thAve2R_Kitchen_straight_on.6.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Beautiful</h3>
      <Button variant='info'>Inquire Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src='https://wp-tid.zillowstatic.com/streeteasy/2/751-79959c.jpg'
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Convenient</h3>
      <Button variant='info'>Inquire Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2016/06/214217130.jpg?quality=80&strip=all&ssl=1'
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2>Affordable</h2>
    <Button variant='info'>Inquire Today</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  

</div>


</div>




);    

}



export default Home;