import * as types from '../constants/actionTypes';

const initialState = {
  pets: [],
  petID: 0,
  petType: 'Dog',
  petName: '',
  petAge: 0,
  petBreed: '',
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PETS_SUCCESS:
      return {
        ...state,
        pets: action.pets,
        petID: action.pets.length + 1,
      };
    case types.LOAD_PETS_FAILURE:
      console.error('Pets loaded unsuccessfully\n', action.err);
      return state;
    case types.SET_PET_TYPE:
      console.log(action.payload.petType);
      return { ...state, petType: action.payload.petType }
    case types.SET_PET_NAME:
      console.log(action.payload.petName);
      return { ...state, petName: action.payload.petName }
    case types.SET_PET_AGE:
      console.log(action.payload.petAge);
      return { ...state, petAge: action.payload.petAge }
    case types.SET_PET_BREED:
      console.log(action.payload.petBreed);
      return { ...state, petBreed: action.payload.petBreed }
    default:
      return state;
  };
};

export default petsReducer;