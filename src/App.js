import React, { useState } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import WelcomeSite from './components/WelcomeSite';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const registeredUsers = [
		{
			name: 'John',
			email: 'admin@admin.com',
			password: '123',
		},
		{
			name: 'Jenny',
			email: 'admin2@admin.com',
			password: '321',
		},
	];

	const [users, setUsers] = useState(registeredUsers);
	const [currentUser, setCurrentUser] = useState(null);
	const [pages, setPages] = useState('Login');
	const [error, setError] = useState(false);

	const currentUserHandler = (i) => {
		const userFind = users.find(
			(user) => user.email === i.email && user.password === i.password
		);

		if (userFind) {
			setCurrentUser(userFind);
			setPages('WelcomeSite');
		} else {
			setError(true)
		}
	};
	const userCurrentlyRegisteredHandler = (i) => {
		setUsers(users.concat(i));
	};

	return (
		<div className='App'>
			{pages === 'Login' ? (
				<Login
					setPages={setPages}
					currentUser={currentUserHandler}
					isError={error}
				/>
			) : null}
			{pages === 'Register' ? (
				<Register
					setPages={setPages}
					userCurrentlyRegistered={userCurrentlyRegisteredHandler}
					setError={setError}
				/>
			) : null}
			{currentUser && <WelcomeSite currentUser={currentUser} setPages={setPages} setCurrentUser={setCurrentUser}/>}
		</div>
	);
}

export default App;
