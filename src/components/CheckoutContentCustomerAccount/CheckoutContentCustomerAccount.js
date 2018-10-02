import React from 'react';
import MaskedInput from 'react-text-mask';  

class CheckoutContentCustomerAccount extends React.Component {
    constructor(props) {
        super(props);

        this.defaultFormState =  {
            userName: "",
            address: "",
            paymentMethod: "Credit card",
            cardNumber: "",
            expDate: "",
            cvv: "",
            bank: "",
            currency: "$"
        }

        this.state = {
            showAddForm: false,
            showAddFormForAccountId: null,
            showMoreAccountId: false,
            selectedAccountId: this.props.accounts[0] ? this.props.accounts[0].id : null,
            formData: {
                ...this.defaultFormState
            },
        };

        this.wrapperRefs = {};
    }   

    createWrapperRef = (id) => {
        return this.wrapperRefs[id] = React.createRef()
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutsideOptionsPopup);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutsideOptionsPopup);
    }

    handleClickOutsideOptionsPopup = (event) => {
        for (let key in this.wrapperRefs) {
            if (this.wrapperRefs[key].current && this.wrapperRefs[key].current.contains(event.target)) return
        }
        this.setState({
            showMoreAccountId: false
        })
    }

    handleSubmit = async (event) => {
        const { showAddFormForAccountId } = this.state;

        event.preventDefault();
        // await API request and save to Redux returned accounts;
        if (showAddFormForAccountId) {
            console.log('Update Account');
            // API call to update account updateAccount(this.state.showAddFormForAccountId)
            this.props.updateAccount({
                ...this.state.formData,
                id: showAddFormForAccountId 
            })
        } else {
            console.log('Create Account');
            // API call to create new createAccount() 
            const id = this.props.accounts[this.props.accounts.length - 1].id + 1;
            console.log('id ' + id);
            this.props.createAccount({
                id,
                ...this.state.formData
            })
        }



        this.closeAccountForm(); 
    }

    deleteAccount = (id) => {
        // API call to remove account
        // update Redux state

        this.props.deleteAccount(id);
    }

    handleChange = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }  
        })
    }

    openAccountForm = (showAddFormForAccountId = null) => { 
        if (showAddFormForAccountId) {
            const { id, ...formData } = this.props.accounts.find(a => a.id === showAddFormForAccountId);
            this.setState({
                showAddForm: true,
                showAddFormForAccountId,
                formData
            })
        } else {
            this.setState({
                showAddForm: true,
                showAddFormForAccountId
            })
        }

    }

    closeAccountForm = () => {
        this.setState({
            showAddForm: false,
            showAddFormForAccountId: null,
            formData: {
                ...this.defaultFormState
            }
        })
    }

    showMorePopup = (id) => {
        this.setState({
            showMoreAccountId: id
        })
    }

    showAddPopup = () => {
        if (this.state.showAddForm) {
            const { showAddFormForAccountId } = this.state;
            return(
                <div className="popup-container">
                    <div className="popup-container__popup">
                        <div className="popup-container__top">
                            <p className="popup-container__title">{ showAddFormForAccountId ? "Edit" : "Create" } Customer Account</p>
                            <a className="popup-container__close" onClick={ () => this.closeAccountForm()}></a>
                        </div>
                        <p className="popup-container__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <form onSubmit={this.handleSubmit}>
                            <label className="labels" htmlFor="username">Name*</label>
                            <input placeholder="John Doe" id="username" name="userName" className="inputs" value={this.state.formData.userName} onChange={ (event => this.handleChange(event)) } required />
                            <label className="labels" htmlFor="address">Address*</label>
                            <input placeholder="London, Ripper street." id="address" name="address" className="inputs" value={this.state.formData.address} onChange={ (event => this.handleChange(event)) } required />
                            <label className="labels" htmlFor="payment-method">Payment method*</label>
                            <select id="payment-method" name="paymentMethod" className="selects" value={this.state.formData.paymentMethod} onChange={ (event => this.handleChange(event)) } >
                                <option value="Wired payment">Wired payment</option>
                                <option value="Credit card">Credit card</option>
                            </select>
                            <label className="labels" htmlFor="currency">Currency*</label>
                            <select id="currency" name="currency" className="selects" value={this.state.formData.currency} onChange={ (event => this.handleChange(event)) } >
                                <option value="$">US Dollar</option>
                                <option value="€">Euro</option>
                            </select>
                            <p className="popup-container__payment-message">Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</p>
                            <div className="popup-container__bottom-container">
                                <div className="popup-container__inliner-card">
                                    <label className="labels" htmlFor="card-number">Card number*</label>
                                    <MaskedInput mask={[/\d/, /\d/, /\d/, /\d/,'—',/\d/, /\d/, /\d/, /\d/,'—',/\d/, /\d/, /\d/, /\d/,'—',/\d/, /\d/, /\d/, /\d/]} placeholder="0000—0000—0000–0000" id="card-number" name="cardNumber" className="inputs popup-container__card-number" value={this.state.formData.cardNumber} onChange={ (event => this.handleChange(event)) } required/>
                                </div>   
                                <div className="popup-container__inliner-exp-date">
                                    <label className="labels" htmlFor="exp-date">Expirity date*</label>
                                    <MaskedInput mask={[/[0-1]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} placeholder="10/2020" id="exp-date" name="expDate" className="inputs popup-container__exp-date" value={this.state.formData.expDate} onChange={ (event => this.handleChange(event)) } required/>
                                </div>   
                                <div className="popup-container__inliner-cvv">
                                    <label className="labels" htmlFor="cvv">CVV*</label>
                                    <MaskedInput mask={[/\d/, /\d/, /\d/]} id="cvv" name="cvv" placeholder="123" className="inputs popup-container__cvv" value={ this.state.formData.cvv} onChange={ (event => this.handleChange(event)) } required/>
                                </div>  
                            </div>
                            <div className="popup-container__submit-container">
                                <a className="popup-container__cancel" onClick={ () => this.closeAccountForm()}>cancel</a>
                                <input className="popup-container__submit" type="submit" value={ showAddFormForAccountId ? "Update" : "Create" } />
                            </div>
                        </form>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    handleSubmitAccount = (event) => {
        event.preventDefault();
        // send selected accountId to API;
        this.props.changeStep(this.props.step + 1);
    }

    selectAccount = (accountId) => {
        this.setState({
            selectedAccountId: accountId
        })
    }

    render = () => {
        let { accounts } = this.props;
        return (
            <div>
                <div className="header">
                    <h1 className="header__title">Customer Account</h1>
                    <button className="header__add" onClick={ () => this.openAccountForm()}><span>+</span></button>
                </div>
                <form className="checkout" onSubmit={this.handleSubmitAccount}>
                    {
                        accounts.map((account) =>
                            <label key={account.id} className="checkout__account" onClick={ () => this.selectAccount(account.id) }>
                                <input type="radio" name="contact" defaultChecked={ account.id === this.state.selectedAccountId} />
                                <span className="checkout__checkmark"></span>
                                <div className="checkout__top">
                                    <div className="checkout__currency-logo"><span>{account.currency}</span></div>
                                    <p className="checkout__name">{account.userName}</p>
                                    <p className="checkout__payment-type">{account.paymentMethod}</p>
                                </div>
                                <div className="checkout__content">
                                    <p>{account.cardNumber}</p>
                                    <p>{account.expDate}</p>
                                    <p>{account.address}</p>
                                </div>
                                <div ref={this.createWrapperRef(account.id)} className="checkout__more" onClick={ () => this.showMorePopup(account.id)}>
                                    <ul className={ (account.id === this.state.showMoreAccountId) ? "checkout__options" : "checkout__options hide" }>
                                        <li className="checkout__edit" onClick={ () => this.openAccountForm(account.id) }>Edit</li>
                                        <li className="checkout__delete" onClick={ () => this.deleteAccount(account.id) }>Delete</li>
                                    </ul>       
                                </div>
                            </label>
                        )
                    }
                    <div className="checkout__bottom">
                        <a className="checkout__back">&larr; Return to shop</a>
                        <button className="checkout__submit" type="submit">CONTINUE TO PAYMENT</button>
                    </div>
                </form>
                { this.showAddPopup() }
            </div>
        )
    }
}

export default CheckoutContentCustomerAccount;