import Form from './Form';
import primaryPlant from '../../../assets/primary-plant.svg';
import * as S from './styles';

const NewsletterSub = () => {
	return (
		<S.Container>
			<S.Content>
				<S.Paragraph>Sua casa com as </S.Paragraph>
				<S.Title>melhores plantas</S.Title>
				<S.SecundaryParagraph>
					Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz
					no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
				</S.SecundaryParagraph>
				<Form />
			</S.Content>
			<S.Image>
				<img
					src={primaryPlant}
					alt='Imagem de uma planta'
				/>
			</S.Image>
		</S.Container>
	);
};

export default NewsletterSub;
