import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { CheckoutFormContext } from '../CheckoutFormContext';
import { useInput } from '../Hooks';
import FieldSet from './FieldSet';
import CleanTextInput from '../../../Components/CleanTextInput';
import Button from '../../../Components/Button';

const PhoneNumber = () => {
    const { formData: { phone }, formDataDispatch } = useContext(CheckoutFormContext);
    const { value, bind } = useInput(`${phone ? phone : "" }`);
    const history = useHistory();
    const sendData = () => {
        formDataDispatch({type: 'ADD_PHONE', phone: value});
        history.push("/checkout")
    }

    return (
    <FieldSet legend="Phone Number">
        <CleanTextInput
            {...bind}
            name="phonenumber"
            type="tel"            
            hint="Enter your phone number to receive notifications about your order.
            This is optional.
            "
            placeholder="+254XXXXXXXXX"
            />
        <Button onClick={sendData} type="button" value="Continue" />
    </FieldSet>
    )}

export default PhoneNumber;
