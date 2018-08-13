import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from '../utils/constants';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);

const store = createMockStore({ bitcoin: {} });

const mockResponse = {
    body: {
        bpi: 'bitcoinKey'
    }
};

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json',
mockResponse
);

it('creates an async func to fetch the bitcoin value', () =>{
    const expectedActions =[{ type: FETCH_BITCOIN, bitcoin: mockResponse.body}];
    return store.dispatch(fetchBitcoin())
    .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});
