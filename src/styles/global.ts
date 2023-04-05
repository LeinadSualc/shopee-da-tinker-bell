import {
    createGlobalStyle
} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;
        --black: #212529;
        --red:  #e54e4d;
        --blue: blue;

    }

    * {
        margin: 0;
        padding: 0;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: Tahoma, sans-serif;
    }

    button {
        cursor: pointer;
    }
`
