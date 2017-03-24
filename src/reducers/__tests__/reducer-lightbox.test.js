import { OPEN_LIGHT_BOX, CLOSE_LIGHT_BOX } from '../../actions/index';
import reducer from '../reducer-lightbox';

describe('Lightbox Reducer', () => {

  it('Default state', () => {
    const action = {};
    const initialState = undefined;
    const expectedState = {};
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

  it('Action: OPEN_LIGHT_BOX', () => {
    const action = {
      type: OPEN_LIGHT_BOX
    };
    const initialState = {};
    const expectedState = {lightboxIsOpen: true};
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

  it('Action: CLOSE_LIGHT_BOX', () => {
    const action = {
      type: CLOSE_LIGHT_BOX
    };
    const initialState = {};
    const expectedState = {lightboxIsOpen: false};
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

})
