const initialState = {
    step: 1,
    accounts: [
        {
            id: 1,
            userName: "John Doe",
            address: "Ripper street",
            paymentMethod: "wire transfer",
            cardNumber: "1232-1231-1231-1231",
            currency: '$',
            expDate: "12/2020",
            cvv: 222
            
        },
        {
            id: 2,
            userName: "Vasya Ivanov",
            address: "Lermontova street",
            paymentMethod: "credit card",
            cardNumber: "1232-1231-1231-1231",
            currency: '€',
            expDate: "12/2020",
            cvv: 123,
            
        },
        {
            id: 3,
            userName: "Simon Bernanke",
            address: "Wall street",
            paymentMethod: "credit card",
            currency: "$",
            cardNumber: "1232-1231-1231-1231",
            expDate: "12/2020",
            cvv: 123
        }
    ],
    paymentFees: {
        serviceFee: 1,
        vat: 18
    },
    cartItems: [
        {
            id: 1, 
            name: "Glitch",
            brand: "Christian Louboutin",
            url: "./pictures/shoes.png",
            price: 200.00
        },
        {
            id: 2,
            name: "Bianca",
            brand: "Christian Louboutin",
            url: "./pictures/shoes.png",
            price: 250.50
        }
    ]   
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_STEP':
            return ({
                ...state,
                step: action.step
            })

        case 'CREATE_ACCOUNT':
            return ({
                ...state,
                accounts: [
                    ...state.accounts,
                    action.account
                ]
            })

        case 'UPDATE_ACCOUNT':
            let updatedAccounts = state.accounts.map(account =>
                    account.id === action.account.id ?
                        action.account :
                            account
                )
            return ({
                ...state,
                accounts: [
                    ...updatedAccounts
                ]
            })
        
        case 'DELETE_ACCOUNT':
            return ({
                ...state,
                accounts: [
                    ...state.accounts.filter(account => 
                        account.id !== action.id
                    )
                ]
            })

        case 'UPDATE_FEE':
            return ({
                ...state,
                paymentFees: {
                    ...action.fee
                }
            })

        default:
            return state;
    }
}

export default rootReducer;