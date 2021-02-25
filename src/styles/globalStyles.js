import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --default-width: 70%;
        --default-padding: 15px;
        --default-card-distance: 15px;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        
        font-family: 'Roboto', Arial, Helvetica, sans-serif;

        color: ${props => props.theme.fontColorOnPrimary};
    }

    html {
        font-size: 100%;
    }

    body {
        height: 100vh;
        background-color: ${props => props.theme.backgroundColor}
    }

    #root {
        display: flex;
        flex-direction: column;

        height: 100%;

    }
`;