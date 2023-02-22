import React from 'react';

const WelcomeSite = ({ currentUser, setPages, setCurrentUser }) => {
	return (
		<div className='screen container d-flex justify-content-center align-items-center'>
			<div className='shadow-lg container row rounded'>
				<div className='text-center'>
					<h1 className='mt-3'>
						Hello, <strong>{currentUser.name}</strong>
					</h1>
					<h3>Welcome back!</h3>
					<button
						onClick={() => [
							setPages('Login'),
							setCurrentUser(null),
						]}
						type='button'
						className='btn btn-primary mt-3 mb-3'
					>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
};

export default WelcomeSite;
