import links from './Links';
import * as S from './styles';
import Icon from '../../assets/Icon.svg';

const Header = () => {
	return (
		<S.StyledHeader>
			<S.Navigation>
				<S.MainLink href='#'>
					<S.IconContainer>
						<S.Dot1></S.Dot1>
						<S.Dot2></S.Dot2>
						<S.Dot3></S.Dot3>
						<S.Dot4></S.Dot4>
						<S.Dot5></S.Dot5>
						<img
							src={Icon}
							alt='Icone principal'
						/>
					</S.IconContainer>
					<S.Title>
						Casa<S.Bold>verde</S.Bold>
					</S.Title>
				</S.MainLink>
				<S.List>
					{links.map((link) => {
						return (
							<S.ItemList key={link.id}>
								<S.ItemLink href={link.url}>{link.text}</S.ItemLink>
							</S.ItemList>
						);
					})}
				</S.List>
			</S.Navigation>
		</S.StyledHeader>
	);
};

export default Header;
