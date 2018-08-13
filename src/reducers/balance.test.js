import * as constants from '../utils/constants';
import balanceReducer from './balance';
import balancereducer2 from './balance';

describe('balance reducer', () => {
    const balance = 10;
it('sets a balance', () =>{
   
    const action = {
        type: constants.SET_BALANCE,
        balance
    }
    expect(balanceReducer(undefined, action)).toEqual(balance);
});

describe('re-initializing', () =>{
    it('reads balance from cookie', () =>{
        expect(balancereducer2(undefined, {})).toEqual(balance);
    });
})

it('deposits into the balance', () => {

const deposit = 10;
const initialState = 6;
const action = {
    type: constants.DEPOSIT_BALANCE,
    deposit
}
expect(balanceReducer(initialState, action)).toEqual(deposit + initialState);
});

it('withdraw from balance', () =>{
const initialState = 30;
const amount = 14;
const action = {
    type: constants.WITHDRAW_BALANCE,
    amount
}
expect(balanceReducer(initialState, action)).toEqual(initialState - amount);
});


});