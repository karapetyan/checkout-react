import React from 'react';

const CheckoutCart = ({cartItems, serviceFee, vat}) => {

    const subtotal = cartItems.reduce((prev, cur) => prev + cur.price, 0);
    const actualServiceFee = parseFloat((serviceFee * subtotal / 100).toFixed(2));
    const actualVat = parseFloat((vat * subtotal / 100).toFixed(2))

    return(
        <div className="four columns cart-block">
            <p className="cart-block__header">
                <span className="cart-block__title">Shopping Cart</span>
                <span className="cart-block__counter">{cartItems.length}</span>
            </p>
            <ul className="cart-block__items">
            {
                cartItems.map(item => 
                    <li key={item.id} className="cart-block__item">
                        <div className="cart-block__picture" style={ {background: ` url(${item.url})`} } ></div>
                        <p className="cart-block__item-title">{item.name}</p>
                        <p className="cart-block__item-subtitle">{item.brand}</p>
                        <p className="cart-block__item-price">${item.price}</p>
                    </li>
                )
            }
            </ul>
        {
            (vat || serviceFee ) ? 
                <ul className="cart-block__pay-details">
                    <li className="cart-block__pay-detail">
                        <span className="cart-block__detail-name">Subtotal</span><span className="cart-block__detail-price">${ subtotal }</span>
                    </li>
                    <li className="cart-block__pay-detail">
                        <span className="cart-block__detail-name">Payment processing services {serviceFee}%</span><span className="cart-block__detail-price">${ actualServiceFee }</span>
                    </li>
                    <li className="cart-block__pay-detail">
                        <span className="cart-block__detail-name">VAT {vat}%</span><span className="cart-block__detail-price">${ actualVat }</span>
                    </li>
                </ul> :
                    null
        }
        <p className="cart-block__pay-total">
            <span className="cart-block__pay-total">Total</span>
            <span className="cart-block__pay-total-price">${subtotal + actualVat + actualServiceFee}</span>
        </p>
        </div>    
    )
}

export default CheckoutCart;