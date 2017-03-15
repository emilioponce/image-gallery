import { combineReducers } from 'redux';
import ImagesReducer from './reducer-images';

const rootReducer = combineReducers({
  images: ImagesReducer
});

export default rootReducer;
