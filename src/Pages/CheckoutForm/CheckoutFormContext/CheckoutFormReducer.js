const CheckoutFormReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EMAIL': {
            const { email } = action;
            return {...state, email}
        }
        case 'ADD_PHONE': {
            const { phone } = action;
            return {...state, phone}
        }
        default: {
            return state;
        }
    }
}

export default CheckoutFormReducer;