import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login () {

    return(
       <div>
           <form>

        <input placeholder='username'/>
        <input placeholder='password'/>
        
        <Button variant='primary'>Login</Button>
       
        <h6>Don't have account ? Sign Up !</h6>
       
        <Button variant='info'>Sign Up</Button>

           </form>

       </div>
    )

}

export default Login;