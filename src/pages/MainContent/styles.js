import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    width: 90%;
    margin: 0 auto;
    margin-top: 30px;

    flex: 1;
    max-height: 95%;

    @media(max-width: 1200px) {
        & {
            flex-direction: column;
        }
    }

    @media(max-width: 480px) {
        & {
            margin-top: 5px;
            width: 100%;
        }
    }
`;
