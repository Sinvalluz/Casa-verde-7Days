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
`;

export const Bold = styled.strong`
	font-weight: ${theme.font.weigth.bold};
`;

export const List = styled.ul`
	display: flex;
	gap: 1rem;
`;

export const ItemList = styled.li`
	display: flex;
	gap: 1rem;
	font-weight: 500;
	&:not(:nth-child(5))::after {
		content: '/';
		font-size: 1.6rem;
	}
`;

export const ItemLink = styled.a`
	font-size: 1.6rem;
	display: block;
	text-decoration: none;
	position: relative;
	text-align: center;
	font-weight: 500;

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
	}
	&:hover:before {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
`;
