import styled from 'styled-components';

export const StyledInput = styled.input`
    padding: 15px;
    margin-bottom: 15px;
    
    font-size: 16px;

    background-color: ${props => props.theme.lightBackgroundColor};
    border-radius: 5px;
    border: none;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
    -moz-appearance: textfield;
    }
`;

export const LabelForInput = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
`;