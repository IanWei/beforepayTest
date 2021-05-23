import { createGlobalStyle } from 'styled-components';

export const GlobalStyle  = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        background-color: #eee;
    }
`
