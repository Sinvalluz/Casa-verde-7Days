import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<h1>hello</h1>
		</ThemeProvider>
	);
};

export default App;
