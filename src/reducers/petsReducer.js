import * as types from '../constants/actionTypes';

const initialState = {
  pets: [],
  petName: '',
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PETS_SUCCESS:
      return { ...state, pets: action.pets };
    case types.LOAD_PETS_FAILURE:
      console.error('Pets loaded unsuccessfully\n', action.err);
      return state;
    case types.SET_PET_NAME:
      console.log(action.payload.petName);
      return { ...state, petName: action.payload.petName }
    default:
      return state;
  };
};

export default petsReducer;