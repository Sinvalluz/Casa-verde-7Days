import links from './Links';
import * as S from './styles';

interface MenuLinksProps {
	menuOpen: boolean;
}

const MenuLinks = ({ menuOpen }: MenuLinksProps): JSX.Element => {
	return (
		<S.List $isOpen={menuOpen}>
			{links.map((link) => {
				return (
					<S.ItemList key={link.id}>
						<S.ItemLink href={link.url}>{link.text}</S.ItemLink>
					</S.ItemList>
				);
			})}
		</S.List>
	);
};

export default MenuLinks;
