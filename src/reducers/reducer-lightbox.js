import { OPEN_LIGHT_BOX, CLOSE_LIGHT_BOX } from '../actions/index';

export default function(state= {lightboxIsOpen: false}, action) {

  switch(action.type) {
    case OPEN_LIGHT_BOX:
    return action.payload
    case CLOSE_LIGHT_BOX:
    return action.payload
    default:
    return state;
  }
}
