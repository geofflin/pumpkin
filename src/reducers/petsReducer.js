import * as types from '../constants/actionTypes';

const initialState = {
  pets: [],
  petID: 0,
  petType: 'dog',
  petName: '',
  petAge: 0,
  petBreed: '',
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PETS_SUCCESS:
      return { ...state, petID: action.pets.length + 1 };
    case types.GET_PETS_FAILURE:
      return state;
    case types.SET_PET_TYPE:
      return { ...state, petType: action.payload.petType }
    case types.SET_PET_NAME:
      return { ...state, petName: action.payload.petName }
    case types.SET_PET_AGE:
      return { ...state, petAge: action.payload.petAge }
    case types.SET_PET_BREED:
      return { ...state, petBreed: action.payload.petBreed }
    case types.ADD_NEW_PET_SUCCESS:
      return {
        pets: [],
        petID: action.payload.petID + 1,
        petType: 'dog',
        petName: '',
        petAge: 0,
        petBreed: '',
      };
    case types.ADD_NEW_PET_FAILURE:
      return state;
    default:
      return state;
  };
};

export default petsReducer;
