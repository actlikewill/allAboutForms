import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
position: relative;
width: 100%;
font: 14px/1.4 sans-serif;

& > input {
    font-size: 1.2rem;
    width: 100%;  
    border: 2px solid gray;
    padding: .6rem .8rem;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    outline: 0;

    &:valid {
        background-color: white;
    }

    &:focus {
        border-color: #f06d06;
        padding: 1rem .8rem;
    }

    &:focus + label {
        background: #f06d06;
        color: white; 
        font-size: 80%;
        padding:1px .85rem;
        width: 100%;
        z-index; 2;
        text-transform: uppercase;
        top: 100%;
        margin-top: -16px;
    }
};

    & > label {
        transition:
          background 0.2s,
          color 0.2s,
          top 0.2s,
          bottom 0.2s,
          right 0.2s,
          left 0.2s;
        position: absolute;
        color: #999;
        padding: 7px .85rem;
        z-index: 1000;

        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;    
        
    };
`;

const FloatingLabelTextInput = (props) => (
    <InputContainer id={`${props.name}-hint`}>
        
        <input type='text' aria-describedby={`${props.name}-hint`} id={props.name} {...props} />
        <label htmlFor={props.name}>
            {props.label}
            {/* <span id={`${props.name}-hint`}>Please enter a valid email.</span> */}
        </label>
    </InputContainer>
);


export default FloatingLabelTextInput;