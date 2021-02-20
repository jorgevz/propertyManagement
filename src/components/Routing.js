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
<div id="page-container">
<div id="content-wrap">

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





<Switch>
        
<Route exact path='/' component={Home}/>
<Route path='/login' component={Login}/>


</Switch>

<footer id="footer" class="py-4 bg-dark text-white-50">
        <div class=" text-center">

          <small>Copyright &copy; </small>

          <small>rentMe🏢</small>
          
        
        </div>

        
      </footer>

</div>
</div>
</Router>




)

};

export default Routing;