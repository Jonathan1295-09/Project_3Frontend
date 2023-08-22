import { Form } from 'react-router-dom';

function Signup(props) {
	return (
		<div>
			<h1>Signup Form</h1>
			<Form action='/signup' method='post'>
				<label htmlFor='username'>Username:</label>
				<input type='text' name='username' id='username' />
				<label htmlFor='password'>Password:</label>
				<input type='password' name='password' id='password' />
				<input type='submit' value='Signup' />
			</Form>
		</div>
	);
}

export default Signup;
