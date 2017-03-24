import { OPEN_LIGHT_BOX, CLOSE_LIGHT_BOX } from '../actions/index';

export default function(state= {}, action) {

  switch(action.type) {
    case OPEN_LIGHT_BOX:
    return { lightboxIsOpen: true }
    case CLOSE_LIGHT_BOX:
    return { lightboxIsOpen: false }
    default:
    return state;
  }
}
