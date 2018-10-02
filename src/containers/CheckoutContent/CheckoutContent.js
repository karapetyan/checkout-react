import { connect } from 'react-redux';
import CheckoutContent from '../../components/CheckoutContent/CheckoutContent';

const mapStateToProps = state => 
    ({
        step: state.step
    })

export default connect(
    mapStateToProps,
    null
)(CheckoutContent)