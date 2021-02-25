import React, {useCallback} from 'react';
import { withRouter } from "react-router";
import Fire from "./Fire";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Signup = ({history}) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await Fire
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      }, [history]);

    return(
       <div>
              <form class='form' onSubmit={handleSignUp} >
        <input name="email" type="email" class='input' placeholder='email'/>
        <br/>
        <input name="password" type="password" class='input' placeholder='password'/>
        <br/>
        <Button type='submit' variant='info'>Register</Button>

           </form>

       </div>
    )

}

export default withRouter (Signup);