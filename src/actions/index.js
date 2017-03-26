import axios from 'axios';
import { URL_BASE } from '../config/properties';

export const FETCH_IMAGES_DATA = 'FETCH_IMAGES_DATA';
export const FETCH_IMAGE_DETAIL = 'FETCH_IMAGE_DETAIL';
export const OPEN_LIGHT_BOX = 'OPEN_LIGHT_BOX';
export const CLOSE_LIGHT_BOX = 'CLOSE_LIGHT_BOX';

export function fetchImages(npag) {
  const URL = URL_BASE + '/images?pag=' + npag;
  return dispatch => {
    return axios.get(URL).then(
      response => {
        dispatch({
          type: FETCH_IMAGES_DATA,
          payload: response
        });
      },
      error => {
        throw error;
      }
    );
  }
}

export function fetchImageDetail(imageId) {
  const URL = URL_BASE + '/images/' + imageId;
  return dispatch => {
    return axios.get(URL).then(
      response => {
        dispatch({
          type: FETCH_IMAGE_DETAIL,
          payload: response
        });
      },
      error => {
        throw error;
      }
    )
  }
}

export function openLightBox() {
  return {
    type: OPEN_LIGHT_BOX
  };
}

export function closeLightBox() {
  return {
    type: CLOSE_LIGHT_BOX
  };
}
