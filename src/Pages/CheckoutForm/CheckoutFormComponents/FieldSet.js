import React from 'react';
import styled from 'styled-components';

const FieldSetBase = styled.fieldset`
        padding: 1rem 2rem 2rem;

    & > legend {
        text-transform: uppercase;
        font-size: 80%;
        font-weight: bold;
        color: gray;
        letter-spacing: 1px;
    }
   
`;

const FieldSet = ({ legend, children }) => {
    return (
        <FieldSetBase>
            <legend>{legend}</legend>         
            {children}
        </FieldSetBase>
    )
};

export default FieldSet;