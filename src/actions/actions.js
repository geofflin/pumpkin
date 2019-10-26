// Action Creators
import * as types from '../constants/actionTypes';

export const getPets = () => dispatch => {
  fetch(`http://localhost:3001/pets/`)
    .then(res => res.json())
    .then(pets => dispatch({ type: types.LOAD_PETS_SUCCESS, pets }))
    .catch(err => dispatch({ type: types.LOAD_PETS_FAILURE, err }));
};