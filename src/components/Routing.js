import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  } from 'react-router-dom'
import Home from './Home';
import Login from './Login';


function Routing () {

return(


<Router>
<div>

<ul class="nav justify-content-center" id="nav">

<li id='logo' class="nav-item">
<a class="nav-link active" href="#"><Link to='/'>rentMe🏢</Link></a>
        </li>
        <li class="nav-item">
<a class="nav-link active" href="#"><Link to='/login'>Submit Tickets</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Units Available</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Screening</a>
        </li>
      </ul>


</div>


<Switch>
        
<Route exact path='/' component={Home}/>
<Route path='/login' component={Login}/>


</Switch>

</Router>




)

};

export default Routing;