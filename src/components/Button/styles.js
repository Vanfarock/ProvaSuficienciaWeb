import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 15px 30px;

    width: ${props => props.width};

    background-color: ${props => props.theme.secondaryColor};
    border: none;
    border-radius: 5px;

    font-size: 16px;
    font-weight: bold;

    transition: all .5s ease;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.darkerSecondaryColor}
    }
`;