import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchFlickr() {
  //@TODO URL in properties
  const url ='http://localhost:3000/api/images?pag=1';
  const request = axios.get(url);
  return {
    type: FETCH_DATA,
    payload: request
  };
}
