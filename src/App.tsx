import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Main from './components/Main';
import Header from './components/Header';

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
				<Main />
			</Container>
		</ThemeProvider>
	);
};

export default App;
