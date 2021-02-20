import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login () {

    return(
       <div>
              <form id='form'>
        <input placeholder='username'/>
        <br/>
        <input placeholder='password'/>
        <br/>
        <Button variant='primary'>Login</Button>
        <br/>
        <h6>Don't have account ? Sign Up !</h6>
        <br/>
        <Button variant='info'>Sign Up</Button>

           </form>

       </div>
    )

}

export default Login;