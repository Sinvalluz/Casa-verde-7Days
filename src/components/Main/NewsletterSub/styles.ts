import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.section`
	display: flex;
	position: relative;
	align-items: center;
	height: 97.5rem;
	z-index: 1;

	@media screen and (max-width: 1200px) {
		height: 800px;
	}
	@media screen and (max-width: 992px) {
		height: 600px;
		justify-content: center;
	}

	@media screen and (max-width: 375px) {
	}
`;

export const Content = styled.section`
	display: block;
	max-width: 48rem;
	z-index: 2;
`;

export const Paragraph = styled.p`
	font-size: 2.2rem;
	line-height: 2.6rem;
	opacity: 50%;
	margin-bottom: 1rem;
`;

export const Title = styled.h2`
	font-size: 8.2rem;
	line-height: 9.4rem;
	font-weight: ${theme.font.weigth.bold};
	font-family: ${theme.font.family.elsie};
	margin-bottom: 2rem;

	@media screen and (max-width: 375px) {
		font-size: 4.2rem;
		line-height: 5rem;
	}
`;

export const SecondaryParagraph = styled.p`
	font-size: 1.6rem;
	line-height: 2.6rem;
	opacity: 50%;
	margin-bottom: 3.2rem;

	@media screen and (max-width: 375px) {
		font-size: 1rem;
		line-height: 2rem;
	}
`;

export const Image = styled.figure`
	position: absolute;
	right: 0;
	top: 0;
	z-index: 0;

	img {
		@media screen and (max-width: 1200px) {
			height: 800px;
		}

		@media screen and (max-width: 992px) {
			display: none;
		}
	}
`;
