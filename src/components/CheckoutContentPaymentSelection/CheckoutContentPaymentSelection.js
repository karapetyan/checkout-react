import React from 'react';

class CheckoutContentPaymentSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payPal: {
                ...this.props.defaultFee
            },
            visa: {
                vat: 0,
                serviceFee: 1
            },
            balance: {
                vat: 0,
                serviceFee: 0
            }
        }
    }

    render() {
        const {updateFee, changeStep, step} = this.props;
        return (
            <div>
              <div className="header">
                <h1 className="header__title">Payment Selection</h1>
              </div>
              <form className="payment">
                      <label className="payment__option" onClick={ () => updateFee(this.state.payPal) } >
                          <input type="radio" id="r1" name="payment-system" value="paypal" defaultChecked/>
                          <span className="payment__checkmark"></span>
                          <div className="payment__icon-option paypal-back"></div>
                      </label> 
                      <label className="payment__option" onClick={ () => updateFee(this.state.visa) } >
                          <input type="radio" id="r1" name="payment-system" value="visa"/>
                          <span className="payment__checkmark"></span>
                          <div className="payment__icon-option visa-back"></div>
                      </label> 
                      <label className="payment__option" onClick={ () => updateFee(this.state.balance) } >
                          <input type="radio" id="r1" name="payment-system" value="balance"/>
                          <span className="payment__checkmark"></span>
                          <div className="payment__text-option">Balance</div>
                      </label> 
                      <div className="checkout__bottom">
                          <a className="checkout__back" onClick={() => changeStep(step - 1)}>&larr; Return to customer account</a>
                          <button className="checkout__submit" type="submit">COMPLETE ORDER</button>
                      </div>
              </form>
            </div>   
        )
    }
} 

export default CheckoutContentPaymentSelection;