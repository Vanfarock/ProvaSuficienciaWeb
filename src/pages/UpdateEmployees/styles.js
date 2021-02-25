import styled from 'styled-components';

export const UpdateEmployeeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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

export const Message = styled.h2`
    text-align: center;
`;