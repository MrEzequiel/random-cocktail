import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    background: #1A1A1A;
    color: #F7F7F7;
    font: 400 1.6rem 'Lato', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea {
    background: none;
    outline: none;
    border: none;
    font-family: inherit;
    color: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`

export default GlobalStyle
