import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.input.attrs(props => ({type: "submit"}))`
    display: block;
    width: 100%;
    background-color: gray;
    padding: .6rem 0;
    border: none;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    margin-top: .5rem;
    cursor: pointer;
    transition: background-color, box-shadow, .1s ease;

    &:hover {
        background-color: #0225B5;
    }

    &:focus, &:active {
        outline: none;
        background-color: #0225B5;
        box-shadow: inset 0 0 0 2px #0225B5, inset 0 0 0 5px white;
    }
`;

const SubmitButton = () => {
    const clickHandle = (e) => {
        e.preventDefault();
    }
    return (
        <BaseButton onClick={(e) => clickHandle(e)} value="Submit"/>
    );
}

export default SubmitButton;