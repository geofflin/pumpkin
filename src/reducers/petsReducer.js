import * as types from '../constants/actionTypes';

const initialState = {
  pets: [],
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PETS_SUCCESS:
      console.log('Pets loaded successfully\n', action.pets);
      return state;
    case types.LOAD_PETS_FAILURE:
      console.error('Pets loaded unsuccessfully\n', action.err);
      return state;
    default:
      return state;
  };
};

export default petsReducer;