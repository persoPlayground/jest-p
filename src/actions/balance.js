import * as constants from '../utils/constants';

export const setBalance = balance => ({
    type: constants.SET_BALANCE,
    balance
});

export const addDepeosit = deposit =>({
    type: constants.DEPOSIT_BALANCE,
    deposit
});

export const withdraw = amount =>({
    type: constants.WITHDRAW_BALANCE,
    amount
});