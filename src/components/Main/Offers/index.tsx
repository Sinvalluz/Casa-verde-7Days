import { useEffect, useState } from 'react';
import * as S from './styles';
import { MoveRight } from 'lucide-react';
import axios from 'axios';

const Offers = () => {
	interface Item {
		name: string;
		price: number;
		img: string;
		id: number;
	}

	const [products, setProducts] = useState<Item[]>([]);
	useEffect(() => {
		axios
			.get('http://localhost:3333/plants')
			.then((reply) => {
				setProducts(reply.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<S.Container>
			<S.Paragraph>Conheça nossas</S.Paragraph>
			<S.Title>ofertas</S.Title>
			<S.Products>
				{products ? (
					products.map((product) => (
						<S.Product key={product.id}>
							<S.Image
								src={`http://localhost:3333/public/images/${product.name.replace(/\s/, '-')}.png`}
								alt={product.name}
							/>
							<S.ProductContent>
								<S.ProductTitle>{product.name}</S.ProductTitle>
								<S.Price>R$ {product.price},00</S.Price>
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
