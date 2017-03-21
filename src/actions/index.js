import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchFlickr(npag) {
  //@TODO URL in properties
  const URL ='http://localhost:3000/api/images?pag='+npag;
  const request = axios.get(URL);
  return {
    type: FETCH_DATA,
    payload: request
  };
}
