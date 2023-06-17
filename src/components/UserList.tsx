import {
	Button,
	Container,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import {  useEffect } from 'react';
import Register from './Register';

function UserList({
	user,
	setUsersData,
	UsersData,
	registerUser,
	getUsersData,
	token
}: any) {
	useEffect(() => {
		getUsersData(user);
	}, [getUsersData, user]);

	function deleteHandler(userProfile: User) {
		fetch(`http://localhost:3000/api/v1/users/${userProfile.id}`, {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + token(),
			},
		})
			.then((res) => {
				return res.json();
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				getUsersData(user);
			});
	}

	return (
		<Container minW={'960px'}>
			<TableContainer>
				<Table>
					<Thead>
						<Tr>
							<Th>Email</Th>
							<Th>Name</Th>
							<Th>Created At</Th>
							<Th>Role Name</Th>
							<Th>Delete User</Th>
						</Tr>
					</Thead>
					<Tbody>
						{UsersData.map((user: User) => {
							return (
								<Tr key={user.id}>
									<Td>{user.email}</Td>
									<Td>{`${user.firstName} ${user.lastName}`}</Td>
									<Td>{user.createdAt.slice(0, 10)}</Td>
									<Td>{user.role.name}</Td>
									{user.role.name === 'Admin' ? (
										<></>
									) : (
										<Td>
											<Button
												colorScheme='red'
												onClick={() => {
													deleteHandler(user);
												}}
											>
												Delete
											</Button>
										</Td>
									)}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
			<Register
				registerUser={registerUser}
				setUsersData={setUsersData}
				UsersData={UsersData}
				getUsersData={getUsersData}
			/>
		</Container>
	);
}

interface User {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	createdAt: string;
	role: { id: string; name: string };
}

export default UserList;
