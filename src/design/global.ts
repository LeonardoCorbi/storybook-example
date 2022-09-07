import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    font-family: Roboto;

		scroll-behavior: smooth;
  }

	html {
		font-size: 16px;
	}

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    appearance: none;
    border: none;
    background-color: transparent;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  a {
    text-decoration-line: underline;
  }

  main {
    padding: 16px;
  }
`;

export default GlobalStyles;
