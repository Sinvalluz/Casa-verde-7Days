import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledHeader = styled.header`
	width: 100%;
	margin-top: 1.6rem;
`;

export const Navigation = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

export const MainLink = styled.a`
	display: flex;
	gap: 4px;
	align-items: center;
	text-decoration: none;
	position: relative;
`;

export const IconContainer = styled.div`
	position: relative;
`;

export const Dot1 = styled.div`
	position: absolute;
	top: 4px;
	left: 15px;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background-color: #8dce97;
`;

export const Dot2 = styled(Dot1)`
	top: 1px;
	left: 5px;
`;

export const Dot3 = styled(Dot1)`
	width: 3px;
	height: 3px;
	top: 12px;
	left: 1px;
`;

export const Dot4 = styled(Dot1)`
	top: 10px;
	left: 12px;
	width: 1px;
	height: 1px;
`;

export const Dot5 = styled(Dot1)`
	top: 13px;
	left: 8px;
	width: 1px;
	height: 1px;
`;

export const Title = styled.h1`
	color: ${theme.colors.title};
	font-size: 3.2rem;
	font-family: ${theme.font.family.elsie};

	@media screen and (max-width: 258px) {
		font-size: 2.4rem;
	}
`;

export const Bold = styled.strong`
	font-weight: ${theme.font.weigth.bold};
`;

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

export const MenuHamburguer = styled.div`
	cursor: pointer;

	@media screen and (min-width: 992px) {
		display: none;
	}
`;
