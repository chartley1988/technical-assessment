import { Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { useState } from 'react';
import style from '../styles/Login.module.css';

function Login({ loginUser }: { loginUser: any }) {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<>
			<form action='' className={style.flexColumn}>
				<FormControl isRequired>
					<FormLabel htmlFor='email-input'>Email</FormLabel>
					<Input
						type='email'
						placeholder='Email'
						onChange={(e: React.FormEvent<HTMLInputElement>) => {
							setEmail(e.currentTarget.value);
						}}
						id='email-input'
					/>
				</FormControl>

				<FormControl isRequired>
					<FormLabel htmlFor='password-input'>Password</FormLabel>
					<Input
						placeholder='Password'
						type='password'
						onChange={(e: React.FormEvent<HTMLInputElement>) => {
							setPassword(e.currentTarget.value);
						}}
						id='password-input'
					/>
				</FormControl>
				<Button
					colorScheme='cyan'
					onClick={() => {
						loginUser(email, password);
					}}
				>
					Submit
				</Button>
			</form>
		</>
	);
}

export default Login;
