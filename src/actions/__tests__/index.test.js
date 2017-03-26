import {
  OPEN_LIGHT_BOX, openLightBox,
  CLOSE_LIGHT_BOX, closeLightBox,
  FETCH_IMAGES, fetchImages,
  FETCH_IMAGE_DETAIL, fetchImageDetail } from '../index';

  describe('Action creators', () => {

    it('should create an action to open LightBox', () => {
      const expectedAction = {
        type: OPEN_LIGHT_BOX
      }
      expect(openLightBox()).toEqual(expectedAction)
    })

    it('should create an action to close LightBox', () => {
      const expectedAction = {
        type: CLOSE_LIGHT_BOX
      }
      expect(closeLightBox()).toEqual(expectedAction)
    })

    it('should create an action fetching Images', async () => {
      const nPag = 1;
      const expected = [{
        type: FETCH_IMAGES,
        payload: {}
      }]

      // mocking dispatch and getState functions from Redux thunk
      const dispatch = jest.fn();
      const getState = jest.fn(
        () => {
          return {}
        }
      );

      // execution
      await fetchImages(nPag)(dispatch, getState);

      // checking action constants are equal
      expect(dispatch.mock.calls[0]).toEqual(expected);
    })

    it('should create an action fetching Image detail', async () => {
      const imageId = 33624801205;
      const expected = [{
        type: FETCH_IMAGE_DETAIL,
        payload: {}
      }]

      // mocking dispatch and getState functions from Redux thunk
      const dispatch = jest.fn();
      const getState = jest.fn(
        () => {
          return {}
        }
      );

      // execution
      await fetchImageDetail(imageId)(dispatch, getState);

      // checking action constants are equal
      expect(dispatch.mock.calls[0]).toEqual(expected);
    })

  })
