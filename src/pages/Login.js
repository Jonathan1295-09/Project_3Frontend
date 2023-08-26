import { Form } from 'react-router-dom';

function Login(props) {
	return (
		<div>
			<h1>Login</h1>
			<Form action='/login' method='post'>
				<div className='login'>
					<label>Username:</label>
					<input className='loginuser' type='text' name='username' placeholder='username' />
					<label>Password:</label>
					<input type='password' name='password' placeholder='password' />
					<input type='submit' value='Login' />
				</div>
			</Form>
		</div>
	);
}

export default Login;
