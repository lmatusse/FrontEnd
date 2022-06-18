import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, border-style, #root {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        outline: none;
        background: none;
        font-family: 'Roboto', sans-serif;
    }
    html {
        color: #011017;
        background-color: var(--white);
    }
    body {
        background-color: var(--white);
    }
    :root {
        --light-100: #f9f9f9;
        --light-300: #f4f5f9;
        --secondary: #1518c1;
        --search: #202327;
        --white: #ffffff;
        --gray: #7a7a7a;
        --outline: #ddd;
        --like: #e8265e;
        --primary: #33a1f2;
        --primary-dark-hover: #011017;
        --primary-light-hover: #2c8ed6;
    }
`;