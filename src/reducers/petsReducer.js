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
  const pets = state.pets;
  switch (action.type) {
    case types.GET_PETS_SUCCESS:
      return {
        ...state,
        pets: action.pets,
        petID: action.pets.length + 1,
      };
    case types.GET_PETS_FAILURE:
      return state;
    case types.SET_PET_TYPE:
      return { ...state, pets, petType: action.payload.petType }
    case types.SET_PET_NAME:
      return { ...state, pets, petName: action.payload.petName }
    case types.SET_PET_AGE:
      return { ...state, pets, petAge: action.payload.petAge }
    case types.SET_PET_BREED:
      return { ...state, pets, petBreed: action.payload.petBreed }
    case types.ADD_NEW_PET_SUCCESS:
      console.log('IN REDUCER: ADD_NEW_PET_SUCCESS')
      return {
        pets: [],
        petID: action.payload.petID + 1,
        petType: 'Dog',
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
