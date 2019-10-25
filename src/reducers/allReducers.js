import { combineReducers } from 'redux';
import petsReducer from './petsReducer';

const allReducers = combineReducers({
  pets: petsReducer,
});

export default allReducers;
