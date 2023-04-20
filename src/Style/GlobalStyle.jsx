import { createGlobalStyle } from "styled-components";



// 1. Utilizarei "font-size: 62.5%" para que assim 10px = 1rem.

export default createGlobalStyle`
    :root {
        scroll-behavior: smooth;
        font-size: 62.5%
        --ff-body: 'Poppins', sans-serif;
        
        --fw-titles: 800;
        --fw-text: 400;
        --cll-hue: 250;
        --cll-primary: hsl(235, 59%, 61%);
        --cll-primary-alt: hsl(235, 60%, 30%);
        --cll-primary-lighter: hsl(235, 92%, 85%);
        --cll-primary-more-lighter: hsl(235, 92%, 95%);
        --cll-title: hsl(235, 8%, 15%);
        --cll-text: hsl(235, 8%, 45%);
        --cll-text-lighter: hsl(235, 8%, 65%);
        --cll-input: hsl(235, 70%, 96%);
        --cll-body: hsl(235, 60%, 99%);
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: var(--ff-body);
    }
    a {
        text-decoration: none;
    }
`;