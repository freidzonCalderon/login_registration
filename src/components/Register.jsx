import React, { useState } from 'react';
import './login.css';

const Register = ({ setPages, userCurrentlyRegistered, setError }) => {
	const [userInput, setUserInput] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onSubmitHandler = (e) => {
		e.preventDefault();

		userCurrentlyRegistered(userInput);

		setUserInput({
			name: '',
			email: '',
			password: '',
		});
		setError(false);
		setPages('Login');
	};

	return (
		<div className='screen container d-flex justify-content-center align-items-center'>
			<div className='shadow-lg container row rounded'>
				<div>
					<h1 className='text-center mt-3 mb-3'>Register</h1>
				</div>

				<form onSubmit={onSubmitHandler}>
					<div className='name'>
						{/*Label Name */}
						<div className='row'>
							<div className='col'></div>
							<div className='col-sm-10 col-lg-5'>
								<label className='text-muted' htmlFor='name'>
									Name:
								</label>
							</div>
							<div className='col'></div>
						</div>

						{/*Input Name */}
						<div className='row mb-3'>
							<div className='col'></div>
							<div className='col-sm-10 col-lg-5'>
								<input
									className='form-control'
									type='text'
									name='name'
									required
									onChange={(e) => {
										setUserInput({
											...userInput,
											name: e.target.value,
										});
									}}
									value={userInput.name}
								/>
							</div>
							<div className='col'></div>
						</div>
					</div>
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

					<div className='buttons'>
						{/*Buttons */}
						<div className='form-group'>
							{/* Button Dont Have Account */}
							<div className='row'>
								<div className='col'></div>
								<button
									className='btn btn-link col-sm-10 col-lg-5'
									type='button'
									onClick={() => [
										setPages('Login'),
										setError(false),
									]}
								>
									Already have an account. Log In Here
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
									Register
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

export default Register;
