import React from 'react';
import { shallow } from 'enzyme';
import {Wallet} from './Wallet';

describe('Wallet', () => {
const mockDeposit = jest.fn();  
const mockWithdraw =jest.fn(); 
const props = {
    balance: 30,
    withdraw : mockWithdraw,
    addDepeosit: mockDeposit
}
const wallet = shallow(<Wallet {...props} />);

it('renders correctly', () => {
    expect(wallet).toMatchSnapshot();
});

it('displays Balance from props', () =>{
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 30');
});

describe('Add deposit to wallet', () =>{
it('creates an input to deposit', () =>{
    expect(wallet.find('.input-wallet').exists()).toBe(true);
});

describe('updates the state when type deposit', () => {
    const userBalance = '50';
    beforeEach(() => {
        wallet.find('.input-wallet').simulate('change',{
            target: { value: userBalance}
        })
    });
   it('changes the local balance in state and convert it to Number', ()=>{
    expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
   }); 

   describe('and user wants to make a deposit', () =>{

    beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
    });
    it('dispatch deposit action `deposit()` received in props with the local balance', () =>{
       expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10)); 
    });
});


describe('remove deposit from wallet', () => {

    beforeEach(() => {
        wallet.find('.btn-remove').simulate('click');
    });

    it('dispatchs the withdraw() receuved from the local state', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
    });


});

});



});



});
