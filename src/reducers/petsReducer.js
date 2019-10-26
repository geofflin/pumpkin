import * as types from '../constants/actionTypes';

const initialState = {
  pets: [],
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PETS_SUCCESS:
      return { ...state, pets: action.pets };
    case types.LOAD_PETS_FAILURE:
      console.error('Pets loaded unsuccessfully\n', action.err);
      return state;
    default:
      return state;
  };
};

export default petsReducer;