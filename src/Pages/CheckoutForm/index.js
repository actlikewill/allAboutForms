import React, { useContext, useEffect } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FormContextProvider, { CheckoutFormContext } from './CheckoutFormContext';
import Components from './CheckoutFormComponents';



const Form = styled.form`
    width: 70%;  
    background-color: #eeefff;  
    border-radius: 6px;
    padding: 1rem 4rem 3rem 4rem;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h4 {
        align-self: start;
    }

    & > a {
        display: inline-block;

        padding-bottom: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        color: gray;
        text-decoration: none;
        font-size: 80%;
        align-self: start;

        &:hover {
            color: #0225B5;
            text-decoration: underline;
        }
    }

    @media (min-width: 900px) {
        width: 30%;
}
`;

const FormNavBase = styled.div`
    display: flex;  
    justify-content: space-between;    
    width: 100%;

    & > button {
        display: block;
        background: none;
        border:none;
        outline: none;
        padding: .5rem;
        cursor: pointer;
        
        &:hover {
            color: blue;
            font-weight: bold;
            text-decoration: underline;
        }
    }
`

const FormNav = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    console.log({pathname})

    const paths = [
        {url: "/checkout", skip: false},
        {url: "/checkout/email", skip: false},
        {url: "/checkout/phone", skip: true},
        {url: "/checkout/a", skip: false}
    ]
    
    
    useEffect(() => {
        if(pathname ===  "/checkout") {
            history.push(paths[1].url)
        }    
    });
    
    const currentPath = paths.findIndex(path => path.url === pathname);


    const skip = () => {        
        history.push(paths[currentPath+1].url)
    }
    return (
        <FormNavBase>
            <button onClick={() => {history.goBack()}} type="button">{"< Back"}</button>
            { 
                paths[currentPath].skip ? 
                <button onClick={skip} type="button">{"Skip >"}</button> :
                null
            }          
        </FormNavBase>
    );
}

const FormBase = ({ children }) => {
    const { formData } = useContext(CheckoutFormContext);
    return (
        <Form>
            {children}
        <span>{JSON.stringify({formData})}</span>
        </Form>
    );
}

const CheckoutForm = () => {
    return (
        <FormContextProvider >
            <FormBase>
                <h4>Checkout Your Order</h4>
                <FormNav />
                <Route path="/checkout/email"><Components.Email /></Route>
                <Route path="/checkout/phone"><Components.PhoneNumber /></Route>
            </FormBase>
        </FormContextProvider>
    );
}

export default CheckoutForm;