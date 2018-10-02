import { connect } from 'react-redux';
import CheckoutContentCustomerAccount from '../../components/CheckoutContentCustomerAccount/CheckoutContentCustomerAccount';
import { changeStep, createAccount, updateAccount, deleteAccount } from '../../actions/index';

const mapStateToProps = state => 
    ({ 
        step: state.step,
        accounts: state.accounts
    })

const mapDispatchToProps = {
    changeStep,
    createAccount,
    updateAccount,
    deleteAccount
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutContentCustomerAccount)