import { Mail } from 'lucide-react';
import * as S from './styles';

const Form = () => {
	return (
		<S.Formulary noValidate>
			<Mail style={{ margin: '0 1rem' }} />
			<S.InputEmail
				type='email'
				id='email'
				name='email'
				placeholder='Insira seu e-mail'
				required
			/>
			<S.Button type='submit'>Assinar newsletter</S.Button>
		</S.Formulary>
	);
};

export default Form;
