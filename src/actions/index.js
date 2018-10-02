export const changeStep = (step) =>
    ({
        type: 'CHANGE_STEP',
        step
    })

export const createAccount = (account) =>
    ({
        type: 'CREATE_ACCOUNT',
        account
    })

export const updateAccount = (account) =>
    ({
        type: 'UPDATE_ACCOUNT',
        account
    })

export const deleteAccount = (id) =>
    ({
        type: 'DELETE_ACCOUNT',
        id
    })

export const updateFee = (fee) =>
    ({
        type: 'UPDATE_FEE',
        fee
    })