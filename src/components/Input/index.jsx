import React from 'react';
import { StyledInput,
        LabelForInput } from './styles';

export default function Input(props) {
    return (
        <>
            <LabelForInput>{props.label}</LabelForInput>
            <StyledInput {...props} />
        </>
    );
}