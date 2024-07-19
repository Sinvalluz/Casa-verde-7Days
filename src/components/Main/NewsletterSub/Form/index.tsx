import * as S from './styles';

const Form = () => {
	return (
		<S.Formulary noValidate>
			<S.IconEmail />
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
