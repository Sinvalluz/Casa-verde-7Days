import styled from 'styled-components';
import theme from '../../../styles/theme';

export const List = styled.ul<{ $isOpen: boolean }>`
	display: flex;
	gap: 1rem;

	@media screen and (max-width: 991px) {
		display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
		flex-direction: column;
		position: absolute;
		background-color: ${theme.colors.text};
		color: #fff;
		gap: 1.6rem;
		right: 0;
		top: 48px;
		width: auto;
		overflow: hidden;
	}
`;

export const ItemList = styled.li`
	display: flex;
	gap: 1rem;
	font-weight: 500;

	@media screen and (max-width: 991px) {
		padding: 2.4rem 4.8rem;
	}

	&:not(:nth-child(5))::after {
		content: '/';
		font-size: 1.6rem;

		@media screen and (max-width: 991px) {
			display: none;
		}
	}
`;

export const ItemLink = styled.a`
	font-size: 1.6rem;
	display: block;
	text-decoration: none;
	position: relative;
	text-align: center;
	font-weight: 500;

	@media screen and (max-width: 991px) {
		width: 100%;
		text-align: center;
		font-size: 2rem;
	}
	@media screen and (max-width: 258px) {
		font-size: 1.8rem;
	}

	&:before {
		content: '';
		position: absolute;
		height: 2px;
		width: 100%;
		bottom: -2px;
		left: 0;
		visibility: hidden;
		background-color: ${theme.colors.text};
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transition: all 0.2s ease-in-out 0s;
		transition: all 0.2s ease-in-out 0s;

		@media screen and (max-width: 991px) {
			background-color: #fff;
		}
	}
	&:hover:before {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
`;
