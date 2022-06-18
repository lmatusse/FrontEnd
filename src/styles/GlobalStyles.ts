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
        font-family: 'Open Sans', sans-serif;
    }
    html {
        color: #011017;
        background-color: var(--primary);
    }
    body {
        
        background-color: var(--primary);
    }
    :root {
        --primary: #f4f5f9;
        --secondary: #1518c1;
        --search: #202327;
        --white: #333;
        --light: #fff;
        --gray: #7a7a7a;
        --outline: #ddd;
        --retweet: #00c068;
        --like: #e8265e;
        --twitter: #33a1f2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2c8ed6;
    }
`;