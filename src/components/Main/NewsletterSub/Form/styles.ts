import styled from 'styled-components';
import theme from '../../../../styles/theme';
import { Mail } from 'lucide-react';

export const Formulary = styled.form`
	display: flex;
	align-items: center;
	background-color: #ffffff;
	height: 7.5rem;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

	@media screen and (max-width: 375px) {
		display: grid;
		grid-template-columns: 50px 1fr;
	}
`;

export const IconEmail = styled(Mail)`
	margin: 0 1rem;

	@media screen and (max-width: 375px) {
		grid-column: 1/1;
	}
`;

export const InputEmail = styled.input`
	flex: 1;
	height: 90%;
	outline: none;
	border: none;
	padding: 1rem 0.2rem;
	background-color: transparent;

	&::placeholder {
		font-size: 1.6rem;
		color: #202020;
		opacity: 30%;
	}

	@media screen and (max-width: 375px) {
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
	text-align: center;

	&:hover {
		background-color: ${theme.colors.text};
	}

	@media screen and (max-width: 375px) {
		font-size: 1rem;
		/* grid-area: button; */
		grid-column: 1/3;
		max-width: 100%;
	}
`;
