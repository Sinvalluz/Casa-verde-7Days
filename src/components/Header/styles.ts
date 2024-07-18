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

export const MenuHamburguer = styled.div`
	cursor: pointer;

	@media screen and (min-width: 992px) {
		display: none;
	}
`;
