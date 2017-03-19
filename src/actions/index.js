import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchFlickr(npag) {
  //@TODO URL in properties
  const url ='http://localhost:3000/api/images?pag='+npag;
  const request = axios.get(url);
  return {
    type: FETCH_DATA,
    payload: request
  };
}
