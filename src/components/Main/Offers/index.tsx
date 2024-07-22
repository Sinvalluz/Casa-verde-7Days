import { useEffect, useState } from 'react';
import imgTest from '../../../assets/produto-01.svg';
import * as S from './styles';
import { MoveRight } from 'lucide-react';

const Offers = () => {
	interface Item {
		name: string;
		preco: number;
		img: string;
		ordem: number;
	}

	const [products, setProducts] = useState<Item[]>([]);
	useEffect(() => {
		fetch(
			'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsenc=p2ANqtz--UEIvaLa3q409bkWeEAlZt3N-2RFy5pwqvqH-Y2CAQjEv1nGTn4Td9hoRhK9IxPyO5hXeUOGerKWy2VnHNxiGaneUd--4udpRd7jYXLmbXI43CCtk&_hsmi=231361624&utm_content=231361624&utm_source=hs_automation',
		)
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<S.Container>
			<S.Paragraph>Conheça nossas</S.Paragraph>
			<S.Title>ofertas</S.Title>
			<S.Products>
				{products ? (
					products.map((product) => (
						<S.Product key={product.ordem}>
							<S.Image
								src={imgTest}
								alt={product.name}
							/>
							<S.ProductContent>
								<S.ProductTitle>{product.name}</S.ProductTitle>
								<S.Price>R$ {product.preco},00</S.Price>
								<S.Button type='button'>
									Comprar <MoveRight />
								</S.Button>
							</S.ProductContent>
						</S.Product>
					))
				) : (
					<p>Carregando...</p>
				)}
			</S.Products>
		</S.Container>
	);
};

export default Offers;
