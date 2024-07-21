import tutorialPlant from '../../../assets/Tutorial-img.svg';
import * as S from './styles';

const Tutorial = () => {
	return (
		<S.TutorialSection>
			<S.Container>
				<S.Image
					src={tutorialPlant}
					alt='Imagem de folhas de plantas'
				/>

				<S.Content>
					<S.Paragraph>Como conseguir </S.Paragraph>
					<S.Title>minha planta</S.Title>
					<S.Infos>
						<S.SecundaryParagraph>Escolha suas plantas</S.SecundaryParagraph>
						<S.SecundaryParagraph>Faça seu pedido</S.SecundaryParagraph>
						<S.SecundaryParagraph>Aguarde na sua casa</S.SecundaryParagraph>
					</S.Infos>
				</S.Content>
			</S.Container>
		</S.TutorialSection>
	);
};

export default Tutorial;
