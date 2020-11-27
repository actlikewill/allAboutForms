import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FieldSet from './FieldSet';
import CleanTextInput from '../../../Components/CleanTextInput';
import Button from '../../../Components/Button';
import { CheckoutFormContext } from '../CheckoutFormContext';
import { useInput } from '../Hooks';

const Email = () => {
    const { formData: { email }, formDataDispatch } = useContext(CheckoutFormContext);
    const { value, bind } = useInput(`${email ? email : "" }`);
    const history = useHistory();
    const sendData = () => {
        formDataDispatch({type: 'ADD_EMAIL', email: value});
        history.push("/checkout/phone")
    }
    return (
    <FieldSet legend="Email" backTo="/register">
        <CleanTextInput
            {...bind}
            name="email"
            type="email"            
            hint="Enter Your Email address."
            />
        <Button onClick={sendData} type="button" value="Continue" />
    </FieldSet>
    );
}

export default Email;