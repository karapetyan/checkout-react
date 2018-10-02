import { connect } from 'react-redux';
import CheckoutCart from '../../components/CheckoutCart/CheckoutCart';

const mapStateToProps = state => ({
    serviceFee: state.paymentFees.serviceFee,
    vat: state.paymentFees.vat,
    cartItems: state.cartItems
})

export default connect(
    mapStateToProps,
    null
)(CheckoutCart)

