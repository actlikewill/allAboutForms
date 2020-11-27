import { createContext, useReducer } from 'react';
import CheckoutFormReducer from './CheckoutFormReducer';

export const CheckoutFormContext = createContext();

const CheckoutFormContextProvider = ({ children }) => {
    const [formData, formDataDispatch] = useReducer(CheckoutFormReducer, {});

    return (
        <CheckoutFormContext.Provider value={{ formData, formDataDispatch}}>
            {children}
        </CheckoutFormContext.Provider>
    );
}

export default CheckoutFormContextProvider;