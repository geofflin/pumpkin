// Action Creators
import * as types from '../constants/actionTypes';

export const getPets = () => dispatch => {
  fetch(`http://localhost:3001/pets/`)
    .then(res => res.json())
    .then(pets => dispatch({ type: types.LOAD_PETS_SUCCESS, pets }))
    .catch(err => dispatch({ type: types.LOAD_PETS_FAILURE, err }));
};

export const setPetType = petType => ({
  type: types.SET_PET_TYPE,
  payload: { petType }
})

export const setPetName = petName => ({
  type: types.SET_PET_NAME,
  payload: { petName }
})

export const setPetAge = petAge => ({
  type: types.SET_PET_AGE,
  payload: { petAge }
})

export const setPetBreed = petBreed => ({
  type: types.SET_PET_BREED,
  payload: { petBreed }
})