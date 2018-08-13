import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { debug } from 'util';

describe('App', () => {

    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains Connected wallet component', () =>{
        //console.log(app.debug());
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });
});