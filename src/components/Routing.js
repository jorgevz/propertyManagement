import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard'
import Login from './Login';
import Signup from './Signup';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";




const Routing = () => {

return(

<AuthProvider>
<Router>
<div id="page-container">
<div id="content-wrap">

<ul class="nav justify-content-center" id="nav">

<li id='logo' class="nav-item">
<a class="nav-link active" href="#"><Link to='/'>rentMe🏢</Link></a>
        </li>
        <li class="nav-item">
<a class="nav-link active" ><Link to='/Login'>Submit Tickets</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link>Units Available</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link>Screening</Link></a>
        </li>
      </ul>





<Switch>
        
<Route exact path='/' component={Home}/>
<Route path='/Login' component={Login} />
<Route path='/Signup' component={Signup}/>
<PrivateRoute  path="/Dashboard" component={Dashboard} />

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
</AuthProvider>



)

};

export default Routing;