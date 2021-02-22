import React, {useState, useEffect} from 'react';
import fire from './fire';
import Login from './components/Login';
import Hero from './Hero'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Activity from './pages/Activity';
import Requests from './pages/Requests';


const auth = () => {
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [hasAccount,setHasAccount] = useState(false);
  
  const  clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  
  const  clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  
    const handleLogin = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err) => {
          switch(err.code) {
            case "auth/Invalid-email":
            case "auth/user-email":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
            break;
            }
            });
    };
  
    const handleSignup = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err) => {
          switch(err.code) {
            case "auth/email-already-In-use":
            case "auth/Invalid-email":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
            break;
            }
            });
    };
  
  const handleLogout = () => {
    fire.auth().signOut();
  };
  
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
      });
  };
  
  useEffect(() => {
    authListener();
  }, []);
  
  return (
      <div>
          <Router>
          <Navbar />
          <Switch>
            <Route path='/activity' exact component={Activity} />
            <Route path='/request' component={Requests} />
            {user ? (
                <Hero handleLogout={handleLogout} />
              
            ) : (
            <Login 
              email = {email}
              setEmail = {setEmail}
              password = {password}
              setPassword = {setPassword}
              handleLogin = {handleLogin}
              handleSignup = {handleSignup}
              hasAccount = {hasAccount}
              setHasAccount = {setHasAccount}
              emailError = {emailError}
              passwordError = {passwordError}/>
            )}
          
          </Switch>
        </Router>
        </div>
    );
  };

export default auth;