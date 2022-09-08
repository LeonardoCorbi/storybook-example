import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './design/global';
import theme from './design/theme';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
			<GlobalStyles />
		</ThemeProvider>
	</React.StrictMode>,
);
reportWebVitals();
