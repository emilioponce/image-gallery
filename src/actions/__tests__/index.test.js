import * as actions from '../index';

describe('action creators', () => {

  it('should create an action to open LightBox', () => {
    const expectedAction = {
      type: actions.OPEN_LIGHT_BOX
    }
    expect(actions.openLightBox()).toEqual(expectedAction)
  })

  it('should create an action to close LightBox', () => {
    const expectedAction = {
      type: actions.CLOSE_LIGHT_BOX
    }
    expect(actions.closeLightBox()).toEqual(expectedAction)
  })

  /*
  @TODO Testing of Async creators.
  Change Redux-promise + axios to middleware redux-thunk would be good idea
  */
  it.skip('should create an action to fetch Image detail', () => {
    const imageId = 33624801205;
    const expectedAction = {
      type: actions.FETCH_IMAGE_DETAIL,
      payload: {}// @TODO Mock object with data
    }
    expect(actions.fetchImageDetail(imageId)).toEqual(expectedAction)
  })

})
