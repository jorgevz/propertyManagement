import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = (props) => {

	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignup,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
	} = props;

	return(
		<section className="login">
			<div className = "loginContainer">
				<label>Username</label>
				<input
					type="text"
					autoFocus
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{emailError}</p>
				<label>Password</label>
				<input 
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			<p className="errorMsg">{passwordError}</p>
			<div className="btnContainer">
				{hasAccount ? (
					<>
						<button onClick={handleLogin}>Sign in</button>
						<p>Don't have an account ? 
						<span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
					</>	
				) :(
					<>
						<button onClick={handleSignup}>Sign up</button>
						<p>Have an account ? 
						<button onClick={() => setHasAccount(!hasAccount)}>Sign in</button></p>
					</>
				)}	
			</div>
			</div>
		</section>	
	);
};

export default Login;



// function Login () {

//     return(
//        <div>
//               <form id='form'>
//         <input placeholder='username'/>
//         <br/>
//         <input placeholder='password'/>
//         <br/>
//         <Button variant='primary'>Login</Button>
//         <br/>
//         <h6>Don't have account ? Sign Up !</h6>
//         <br/>
//         <Button variant='info'>Sign Up</Button>

//            </form>

//        </div>
//     )

// }

// export default Login;