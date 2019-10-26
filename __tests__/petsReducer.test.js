import petsReducer from '../src/reducers/petsReducer';

describe('MegaMarkets reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      pets: [],
      petID: 0,
      petType: 'dog',
      petName: '',
      petAge: 0,
      petBreed: '',
    };
  });

  describe('default state', () => {
    it('should return default state when given an undefined input', () => {
      expect(petsReducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(petsReducer(state, action)).toBe(state);
    });
  });

  describe('ACTION: GET_PETS_SUCCESS', () => {
    const scooby = { id: 1, petType: 'dog', name: 'Scooby', age: 7, breed: 'cartoon' };
    const garfield = { id: 2, petType: 'cat', name: 'Garfield', age: 10, breed: 'cartoon' };
    const pets = [scooby, garfield];
    const action = { type: 'GET_PETS_SUCCESS', pets };
    const newState = petsReducer(state, action);

    it('number of pets should be updated', () => {
      expect(state.pets.length).toBe(0);
      expect(newState.pets.length).toBe(2);
    });

    it('new pets should be added into the pets state array', () => {
      expect(newState.pets[0]).toEqual(scooby);
      expect(newState.pets[1]).toEqual(garfield);
    });

    it('petID should be updated', () => {
      expect(newState.petID).toBe(newState.pets.length + 1);
    });

    it('should return an object not strictly equal to the original', () => {
      expect(newState).not.toBe(state);
    });

  });

  describe('ACTION: SET_PET_TYPE', () => {
    it('should...', () => {

    });
  });

  describe('ACTION: SET_PET_NAME', () => {
    it('should...', () => {

    });
  });

  describe('ACTION: SET_PET_AGE', () => {
    it('should...', () => {

    });
  });

  describe('ACTION: SET_PET_BREED', () => {
    it('should...', () => {

    });
  });

  describe('ACTION: ADD_NEW_PET_SUCCESS', () => {
    it('should...', () => {

    });
  });


});
