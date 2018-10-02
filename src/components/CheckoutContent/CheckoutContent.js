import React from 'react';
import Steps from '../../containers/Steps/Steps';
import CheckoutContentCustomerAccount from '../../containers/CheckoutContentCustomerAccount/CheckoutContentCustomerAccount';
import CheckoutContentPaymentSelection from '../../containers/CheckoutContentPaymentSelection/CheckoutContentPaymentSelection';

const CheckoutContent = ({step}) => {

    let Content;
    if (step === 1) Content = CheckoutContentCustomerAccount;
    if (step === 2) Content = CheckoutContentPaymentSelection;
    
    return (
        <div className="eight columns left-block">
            <Steps/>
            <Content/>
        </div>
    )
}

export default CheckoutContent;