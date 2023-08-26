import { Form } from 'react-router-dom';

function Signup(props) {
	return (
		<div>
			<h1>Signup</h1>
			<Form action='/signup' method='post'>
				<div className='Signup'>
					<label htmlFor='username'>Username:</label>
					<input className='Signupusername' type='text' name='username' id='username' />
					<label htmlFor='password'>Password:</label>
					<input type='password' name='password' id='password' />
					<input type='submit' value='Signup' />
				</div>	
			</Form>
		</div>
	);
}

export default Signup;
