import {
	Container,
	Input,
	FormControl,
	FormLabel,
	Flex,
	Button,
	FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';

function Register({
	registerUser,
	getUsersData,
}: any) {
	const [FirstName, setFirstName] = useState('');
	const [LastName, setLastName] = useState('');
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');

	return (
		<Flex
			flexDir={'column'}
			gap={8}
			border={'1px'}
			borderRadius={'lg'}
			padding={4}
		>
			<FormControl isRequired>
				<FormLabel>First Name</FormLabel>
				<Input
					placeholder='First Name'
					type='text'
					onChange={(e: React.FormEvent<HTMLInputElement>) => {
						setFirstName(e.currentTarget.value);
					}}
				/>
			</FormControl>

			<FormControl isRequired>
				<FormLabel>Last Name</FormLabel>
				<Input
					placeholder='Last Name'
					type='text'
					onChange={(e: React.FormEvent<HTMLInputElement>) => {
						setLastName(e.currentTarget.value);
					}}
				/>
			</FormControl>

			<FormControl isRequired>
				<FormLabel>Email</FormLabel>
				<Input
					id='emailInput'
					type='email'
					placeholder='jane@example.com'
					onChange={(e: React.FormEvent<HTMLInputElement>) => {
						setEmail(e.currentTarget.value);
					}}
				/>
			</FormControl>

			<FormControl isRequired>
				<FormLabel>Password</FormLabel>
				<Input
					type='password'
					onChange={(e: React.FormEvent<HTMLInputElement>) => {
						setPassword(e.currentTarget.value);
					}}
				/>
			</FormControl>

			<Button
				colorScheme='cyan'
				onClick={(e) => {
					registerUser(FirstName, LastName, Email, Password);
				}}
			>
				Submit
			</Button>
		</Flex>
	);
}

export default Register;
