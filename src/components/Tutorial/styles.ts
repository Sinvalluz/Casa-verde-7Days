import styled from 'styled-components';
import theme from '../../styles/theme';

export const TutorialSection = styled.section`
	width: 100%;
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export const Image = styled.img`
	@media screen and (max-width: 728px) {
		width: 60vw;
	}
`;

export const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 4rem 2.6rem;
	box-sizing: border-box;

	@media screen and (max-width: 992px) {
		flex: none;
	}

	@media screen and (max-width: 330px) {
		padding: 2rem 1rem;
	}
`;

export const Paragraph = styled.p`
	font-size: 2.2rem;
	line-height: 2.6rem;
	opacity: 50%;

	@media screen and (max-width: 320px) {
		font-size: 2rem;
	}
`;

export const Title = styled.h3`
	font-size: 4.2rem;
	line-height: 4.8rem;
	font-family: ${theme.font.family.elsie};
	font-weight: ${theme.font.weigth.bold};

	@media screen and (max-width: 320px) {
		font-size: 3.8rem;
	}
`;

export const Infos = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.6rem;
	margin-top: 1rem;
`;
export const SecundaryParagraph = styled.p`
	display: flex;
	font-size: 2.2rem;
	line-height: 2.6rem;
	color: rgb(32, 32, 32, 0.5);
	gap: 1rem;
	align-items: center;

	@media screen and (max-width: 320px) {
		font-size: 1.6rem;
	}

	&::before {
		content: '';
		flex: none;
		display: block;
		width: 52px;
		height: 52px;
		background-color: ${theme.colors.butoon};
		border-radius: 50%;

		@media screen and (max-width: 320px) {
			width: 30px;
			height: 30px;
		}
	}
`;
