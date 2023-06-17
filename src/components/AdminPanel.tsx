import { useState, useEffect } from 'react';
import Login from './Login';
import { Flex } from '@chakra-ui/react';
import UserList from './UserList';

function AdminPanel() {
	const [user, setUser] = useState();
	const [UsersData, setUsersData] = useState<any>([]);

	const token = () => {
		const storedUser = localStorage.getItem('user');
		if (storedUser !== null) {
			const userObject = JSON.parse(storedUser);
			return userObject.token;
		}
	};

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser !== null) {
			const userObject = JSON.parse(storedUser);
			setUser(userObject.user);
		}
	}, []);

	function registerUser(
		first_name: string,
		last_name: string,
		email: string,
		password: string
	) {
		fetch('http://localhost:3000/api/v1/auth/email/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName: first_name,
				lastName: last_name,
				email: email,
				password: password,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.catch((error) => {
				console.log(`Error: ${error}`);
			})
			.finally(() => {
				getUsersData();
			});
	}

	function loginUser(email: string, password: string) {
		fetch('http://localhost:3000/api/v1/auth/admin/email/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				const userData = JSON.stringify(data);
				localStorage.setItem('user', userData);
				setUser(data.user);
			})
			.catch((error) => {
				console.log(`Error: ${error}`);
			});
	}

	function getUsersData() {
		fetch('http://localhost:3000/api/v1/users?page=1&limit=20/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token(),
			},
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((userList) => {
				setUsersData(userList.data);
			})
			.catch((error) => {
				console.log(`Error: ${error}`);
			});
	}

	return (
		<>
			{user ? (
				<Flex flexDir={'column-reverse'}>
					<UserList
						user={user}
						setUsersData={setUsersData}
						UsersData={UsersData}
						getUsersData={getUsersData}
						registerUser={registerUser}
						token={token}
					/>
				</Flex>
			) : (
				<Login loginUser={loginUser} />
			)}
		</>
	);
}

export default AdminPanel;
