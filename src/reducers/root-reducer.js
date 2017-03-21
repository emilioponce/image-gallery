import { combineReducers } from 'redux';
import ImagesReducer from './reducer-images';

const rootReducer = combineReducers({
  imagesPage: ImagesReducer
});

export default rootReducer;
