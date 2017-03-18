import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchFlickr() {
  //@TODO to properties
  const url ='http://localhost:3030/api/images?pag=1';
  const request = axios.get(url);
  return {
    type: FETCH_DATA,
    payload: request
  };
}
