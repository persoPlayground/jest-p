import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../utils/constants';

describe('bitcoinReducer', () => {
    const bitcoinData = {
        bpi:'bala'
    };

    it('fetchs and sets the bitcoin data', () =>{
      expect(  bitcoinReducer( {}, {
            type: FETCH_BITCOIN,
            bitcoin: bitcoinData
        }) ).toEqual(bitcoinData)

    });

});