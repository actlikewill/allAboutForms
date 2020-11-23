import React from 'react';
import CleanTextInput from '../../Components/CleanTextInput';
import SubmitButton from '../../Components/SubmitButton';
import styled from 'styled-components';

const FormBase = styled.form`
    width: 70%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h4 {
        align-self: flex-start;
    }

    @media (min-width: 900px) {
        width: 30%;
    }
`;
const RegistrationForm =  () =>  (    
    <FormBase>
        <h4>Register</h4>        
        <CleanTextInput 
            name="email"
            type="email" 
            label="Email"
            />
        <CleanTextInput 
            name="password" 
            type="password" 
            label="Choose Password" 
            hint="Password should be minimum 8 characters."
            />
        <SubmitButton  />
    </FormBase>
);


export default RegistrationForm;