import axios from 'axios';

export const FETCH_IMAGES_DATA = 'FETCH_IMAGES_DATA';
export const FETCH_IMAGE_DETAIL = 'FETCH_IMAGE_DETAIL';
export const OPEN_LIGHT_BOX = 'OPEN_LIGHT_BOX';
export const CLOSE_LIGHT_BOX = 'CLOSE_LIGHT_BOX';

export function fetchFlickr(npag) {
  //@TODO URL in properties
  const URL ='http://localhost:3000/api/images?pag='+npag;
  const request = axios.get(URL);
  return {
    type: FETCH_IMAGES_DATA,
    payload: request
  };
}

export function fetchImageDetail(imageId) {
  //@TODO URL in properties
  const URL ='http://localhost:3000/api/images/'+imageId;
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
