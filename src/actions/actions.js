// Action Creators
import * as types from '../constants/actionTypes';
import history from '../history';

export const getPets = () => dispatch => {
  fetch(`http://localhost:3001/pets/`)
    .then(res => res.json())
    .then(pets => dispatch({ type: types.GET_PETS_SUCCESS, pets }))
    .catch(err => dispatch({ type: types.GET_PETS_FAILURE, err }));
};

export const setPetType = petType => ({
  type: types.SET_PET_TYPE,
  payload: { petType },
});

export const setPetName = petName => ({
  type: types.SET_PET_NAME,
  payload: { petName },
});

export const setPetAge = petAge => ({
  type: types.SET_PET_AGE,
  payload: { petAge },
});

export const setPetBreed = petBreed => ({
  type: types.SET_PET_BREED,
  payload: { petBreed },
});

export const resetNewPet = () => ({
  type: types.RESET_NEW_PET,
});

export const addNewPet = () => (dispatch, getState) => {
  const { petID, petType, petName, petAge, petBreed } = getState().pets;
  if (!petName || !petBreed) return;
  const newPet = {
    id: petID,
    petType: petType,
    name: petName,
    age: petAge,
    breed: petBreed,
  };
  fetch(`http://localhost:3001/pets/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPet),
  })
    .then(res => res.json())
    .then(pet => {
      history.push('/pets/success');
      dispatch({ type: types.ADD_NEW_PET_SUCCESS });
    })
    .catch(err => dispatch({ type: types.ADD_NEW_PET_FAILURE, err }));
};