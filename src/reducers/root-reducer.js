import { combineReducers } from 'redux';
import ImagesReducer from './reducer-images';
import ActiveImageReducer from './reducer-active-image';
import LightBoxReducer from './reducer-lightbox';

const rootReducer = combineReducers({
  imagesPage: ImagesReducer,
  activeImage: ActiveImageReducer,
  lightBox: LightBoxReducer
});

export default rootReducer;
