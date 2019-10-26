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
      return { ...state, petType: action.payload.petType }
    case types.SET_PET_NAME:
      return { ...state, petName: action.payload.petName }
    case types.SET_PET_AGE:
      return { ...state, petAge: action.payload.petAge }
    case types.SET_PET_BREED:
      return { ...state, petBreed: action.payload.petBreed }
    case types.ADD_NEW_PET:
      console.log('petId', action.payload.petID);
      console.log('petType', action.payload.petType);
      console.log('petName', action.payload.petName);
      console.log('petAge', action.payload.petAge);
      console.log('petBreed', action.payload.petBreed);
      return state;
    default:
      return state;
  };
};

export default petsReducer;