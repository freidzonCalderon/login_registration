import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const Login = ({ setPages, currentUser, isError }) => {
	const [userInput, setUserInput] = useState({
		email: '',
		password: '',
	});

	const onSubmitFormHandler = (e) => {
		e.preventDefault();

		currentUser(userInput);
		setUserInput({
			email: '',
			password: '',
		});
	};

	return (
		<div className='screen container d-flex justify-content-center align-items-center'>
			<div className='shadow-lg container row rounded'>
				<div>
					<h1 className='text-center mt-3 mb-3'>Log In</h1>
				</div>

				<form onSubmit={onSubmitFormHandler}>
					<div className='input'>
						{/*Label Input */}
						<div className='row'>
							<div className='col'></div>
							<div className='col-sm-10 col-lg-5'>
								<label className='text-muted' htmlFor='email'>
									Email:
								</label>
							</div>
							<div className='col'></div>
						</div>

						{/*Input */}
						<div className='row mb-3'>
							<div className='col'></div>
							<div className='col-sm-10 col-lg-5'>
								<input
									className='form-control'
									type='email'
									name='email'
									required
									onChange={(e) => {
										setUserInput({
											...userInput,
											email: e.target.value,
										});
									}}
									value={userInput.email}
								/>
							</div>
							<div className='col'></div>
						</div>
					</div>

					<div className='password'>
						{/*Label Password */}
						<div className='row'>
							<div className='col'></div>
							<div className='col-sm-10 col-lg-5'>
								<label className='text-muted' htmlFor='email'>
									Password:
								</label>
							</div>
							<div className='col'></div>
						</div>

						{/*Password */}
						<div className='row mb-3'>
							<div className='col'></div>
							<div className='col-sm-10 col-lg-5'>
								<input
									className='form-control'
									type='password'
									name='password'
									required
									onChange={(e) => {
										setUserInput({
											...userInput,
											password: e.target.value,
										});
									}}
									value={userInput.password}
								/>
							</div>
							<div className='col'></div>
						</div>
					</div>

					<div className='error'>
						{/*Error */}
						<div className='row mb-2'>
							<div className='col'></div>
							{isError ? (
								<div className='text-center text-danger col-sm-10 col-lg-5'>
									Your email and password do not match. Try
									again
								</div>
							) : (
								<div className='col'></div>
							)}
							<div className='col'></div>
						</div>
					</div>

					<div className='buttons'>
						{/*Buttons */}
						<div className='form-group'>
							{/* Button Dont Have Account */}
							<div className='row'>
								<div className='col'></div>
								<button
									className='btn btn-link col-sm-10 col-lg-5'
									type='button'
									onClick={() => setPages('Register')}
								>
									Don't have an account. Register Here
								</button>
								<div className='col'></div>
							</div>

							{/* Button Log In */}
							<div className='row mb-3'>
								<div className='col'></div>
								<button
									className='btn btn-primary col-sm-10 col-lg-5'
									type='submit'
								>
									Log In
								</button>
								<div className='col'></div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
