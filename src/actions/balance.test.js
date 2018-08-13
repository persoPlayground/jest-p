import * as constants from '../utils/constants';
import * as actions from './balance';

it('creates an actions to set the balance', () => {
    const balance = 0;
    const expectedAction = {
        type: constants.SET_BALANCE,
        balance
    };

    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit balance', () => {
    const deposit = 20;
    const expectedAction = {
        type: constants.DEPOSIT_BALANCE,
        deposit
    };
    expect(actions.addDepeosit(deposit)).toEqual(expectedAction);

});

it('creates an action to withdraw balance', () => {
    const amount = 20;
    const expectedAction = {
        type: constants.WITHDRAW_BALANCE,
        amount
    };
    expect(actions.withdraw(amount)).toEqual(expectedAction);

});