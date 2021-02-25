import React, {useCallback, useContext} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth.js";
import Fire from './Fire';

const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await Fire
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/Dashboard");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/Dashboard" />;
      }


    return(
       <div>
              <form class='form' onSubmit={handleLogin} >
        <input class='input' name="email" type="email" placeholder='email'/>
        <br/>
        <input class='input' name="password" type="password" placeholder='password'/>
        <br/>
        <Button type='submit' variant='primary'>Login</Button>
        <br/>
        <h6>Don't have account ?  Sign Up !</h6>
        <br/>
        <Button href='./signup' variant='info'>Sign Up</Button>

           </form>

       </div>
    )

}

export default Login;