import { connect } from 'react-redux';
import { changeStep, updateFee } from '../../actions/index';
import CheckoutContentPaymentSelection from '../../components/CheckoutContentPaymentSelection/CheckoutContentPaymentSelection';

const mapStateToProps = (state) => ({
    defaultFee: state.paymentFees,
    step: state.step
})

const mapDispatchToProps = {
    changeStep,
    updateFee
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutContentPaymentSelection)