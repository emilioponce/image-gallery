import { combineReducers } from 'redux';
import ImagesReducer from './reducer-images';
import ActiveImageReducer from './reducer-active-image';

const rootReducer = combineReducers({
  imagesPage: ImagesReducer,
  activeImage: ActiveImageReducer
});

export default rootReducer;
