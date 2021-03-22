import { Button } from 'react-bootstrap';
import React from 'react';
import threebed from '../3-bed.jpg';
import fourbed from '../4-bed.jpg';
import studio from '../studio.jpg';

const Unit = () => {

return(

<div id='units'>

<h1>Units currently available</h1>
<br/>

<div id='list'>

  <div>
  <li>
    <img class='unitimgs' src={threebed}/>
   </li>
   <li><span>3 bed - 1 bath - balcony</span></li>
   </div>

   <div>
   <li>
    <img class='unitimgs' src={fourbed} />
    <li><span>4 bed - 2 bath</span></li>
   </li>
   </div>

   <div>
   <li>
    <img class='unitimgs' src={studio} />
    <li><span>1 bed - 1 bath - (studio)</span></li>
   </li>
   </div>

</div>


<br/>
<br/>
<br/>
<br/>
<Button href='/Contact'>Contact US</Button>

</div>


);

} 

export default Unit;
