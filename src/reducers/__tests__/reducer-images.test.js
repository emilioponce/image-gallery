import { FETCH_IMAGES } from '../../actions/index';
import reducer from '../reducer-images';

describe('Images Reducer', () => {

  it('Default state', () => {
    const action = {};
    const initialState = undefined;
    const expectedState = {};
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

  // @TODO Async tests : FAILURE, EMPTY, WITH_DATA
  // Change Redux-promise + axios to middleware redux-thunk would be good idea
  it.skip('Fetch Image data state', () => {
    const action = {
      type: FETCH_IMAGES,
      payload: {
        pages: 300
      }
    };
    const initialState = undefined;
    const expectedState = {pages: 300};
    expect(reducer(initialState, action)).toEqual(expectedState);
  })


})
