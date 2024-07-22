import { FormEvent, useEffect, useState } from 'react';
import * as S from './styles';
import axios from 'axios';

const Form = () => {
	const [email, setEmail] = useState<string>('');
	const [emailValid, setEmailValid] = useState<boolean>(false);

	useEffect(() => {
		setEmailValid(validateEmail(email));
	}, [email]);

	async function submitForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!email) {
			alert('Preencha o espaço de e-mail');
			return false;
		} else if (!emailValid) {
			alert(`(${email}) não é um e-mail válido`);
			setEmail('');
			return false;
		} else {
			try {
				await axios.post('http://localhost:3000/send-email', { email });
				alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
				setEmail('');
				return true;
			} catch (error) {
				alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.');
				return false;
			}
		}
	}

	function validateEmail(email: string) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	return (
		<S.Formulary
			onSubmit={submitForm}
			noValidate>
			<S.IconEmail />
			<S.InputEmail
				type='email'
				id='email'
				name='email'
				placeholder='Insira seu e-mail'
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				required
			/>
			<S.Button type='submit'>Assinar newsletter</S.Button>
		</S.Formulary>
	);
};

export default Form;
