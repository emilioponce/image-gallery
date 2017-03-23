import { FETCH_IMAGES_DATA } from '../actions/index';

export default function(state= {}, action) {

  switch(action.type) {
    case FETCH_IMAGES_DATA:
    return action.payload.data;
    default:
    return state;
  }
}
