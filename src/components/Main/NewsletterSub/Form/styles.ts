import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const Formulary = styled.form`
	display: flex;
	align-items: center;
	background-color: #ffffff;
	height: 7.5rem;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
`;

export const InputEmail = styled.input`
	flex: 1;
	height: 90%;
	outline: none;
	border: none;
	padding: 1rem 0;
	background-color: transparent;

	&::placeholder {
		font-size: 1.6rem;
		color: #202020;
		opacity: 30%;
	}
`;

export const Button = styled.button`
	height: 100%;
	max-width: 18rem;
	flex: 1;
	border: none;
	background-color: ${theme.colors.butoon};
	font-size: 1.6rem;
	color: #ffffff;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: ${theme.colors.text};
	}
`;
