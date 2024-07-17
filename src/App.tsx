import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import theme from './styles/theme';

const Container = styled.section`
	width: 80%;
	margin: 0 auto;
	height: 100vh;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<Header />
			</Container>
		</ThemeProvider>
	);
};

export default App;
