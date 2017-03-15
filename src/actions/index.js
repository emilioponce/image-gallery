import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchFlickr() {

  //TODO FLICKR API!
  const ROOT_URL ='http://ergast.com/api/f1';
  const url = ROOT_URL+'/2017.json'
  //promise
  const request = axios.get(url);
  return {
    type: FETCH_DATA,
    payload: request
  };
}
