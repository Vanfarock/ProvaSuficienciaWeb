import styled from 'styled-components';

export const RemoveEmployeeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    background-color: ${props => props.theme.foregroundColor};

    flex: 1;
    height: 100%;
    
    margin: 0 auto;

    @media(max-width: 1200px) {
        & {
            width: 100%
        }
    }
`;

export const RemoveEmployeeForm = styled.form`
    margin: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    width: 50%;

    & > p {
        margin-bottom: 30px;
    }

    @media(max-width: 480px) {
        & {
            width: 70%;
        }
    }
`;