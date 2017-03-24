import axios from 'axios';
import { URL_BASE } from '../config/properties';

export const FETCH_IMAGES_DATA = 'FETCH_IMAGES_DATA';
export const FETCH_IMAGE_DETAIL = 'FETCH_IMAGE_DETAIL';
export const OPEN_LIGHT_BOX = 'OPEN_LIGHT_BOX';
export const CLOSE_LIGHT_BOX = 'CLOSE_LIGHT_BOX';

export function fetchFlickr(npag) {
  const URL = URL_BASE + '/images?pag=' + npag;
  const request = axios.get(URL);
  return {
    type: FETCH_IMAGES_DATA,
    payload: request
  };
}

export function fetchImageDetail(imageId) {
  const URL = URL_BASE + '/images/' + imageId;
  const request = axios.get(URL);
  return {
    type: FETCH_IMAGE_DETAIL,
    payload: request
  };
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
