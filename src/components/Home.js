import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap';
import apartment from '../apartment.jpg';
import apartment1 from '../apartment1.jpg';
import apartment2 from '../apartment2.jpg';

const Home = () => {
 
return(
 
    
<div>


<div>
<Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={apartment}
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
      src={apartment1}
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
      src={apartment2}
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