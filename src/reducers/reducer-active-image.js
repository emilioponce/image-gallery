import {FETCH_IMAGE_DETAIL} from '../actions/index';

export default function(state= {}, action) {

  switch(action.type) {
    case FETCH_IMAGE_DETAIL:
    return action.payload.data.photo;
    default:
    return state;
  }
}
