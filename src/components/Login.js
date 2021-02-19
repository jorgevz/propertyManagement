import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


 const Login = () => {

    return(
       <div>
           <form>
        <input placeholder='username'/>
        <input placeholder='password'/>
        <hr/>
        <button>Login</button>
        <h5>Don't have account ? Sign Up !</h5>
        <button>Sign Up</button>
           </form>
       </div>
    )

}

export default Login;