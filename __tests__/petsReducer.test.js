import petsReducer from '../src/reducers/petsReducer';

describe('MegaMarkets reducer', () => {
  const initialState = {
    pets: [],
    petID: 0,
    petType: 'dog',
    petName: '',
    petAge: 0,
    petBreed: '',
  };
  let state;

  beforeEach(() => {
    state = {
      pets: [],
      petID: 12,
      petType: 'cat',
      petName: 'test',
      petAge: 23,
      petBreed: 'hot dog',
    };
  });

  describe('default state', () => {
    it('should return default state when given an undefined input', () => {
      expect(petsReducer(undefined, { type: undefined })).toEqual(initialState);
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

    it('should update number of pets', () => {
      expect(state.pets.length).toBe(0);
      expect(newState.pets.length).toBe(2);
    });

    it('should update pets', () => {
      expect(newState.pets[0]).toEqual(scooby);
      expect(newState.pets[1]).toEqual(garfield);
    });

    it('should update petID', () => {
      expect(newState.petID).toBe(3);
    });

    it('should return an object not strictly equal to the original', () => {
      expect(petsReducer(state, action)).not.toBe(state);
    });

  });

  describe('ACTION: SET_PET_TYPE', () => {
    const petType = 'cat';
    const action = { type: 'SET_PET_TYPE', payload: { petType } };
    const newState = petsReducer(state, action);

    it('should update pet type', () => {
      expect(newState.petType).toBe('cat');
    });

    it('should return an object not strictly equal to the original', () => {
      expect(petsReducer(state, action)).not.toBe(state);
    });

  });

  describe('ACTION: SET_PET_NAME', () => {
    const petName = 'Clifford';
    const action = { type: 'SET_PET_NAME', payload: { petName } };
    const newState = petsReducer(state, action);

    it('should update pet name', () => {
      expect(newState.petName).toBe('Clifford');
    });

    it('should return an object not strictly equal to the original', () => {
      expect(petsReducer(state, action)).not.toBe(state);
    });
  });

  describe('ACTION: SET_PET_AGE', () => {
    const petAge = 5;
    const action = { type: 'SET_PET_AGE', payload: { petAge } };
    const newState = petsReducer(state, action);

    it('should update pet age', () => {
      expect(newState.petAge).toBe(5);
    });

    it('should return an object not strictly equal to the original', () => {
      expect(petsReducer(state, action)).not.toBe(state);
    });
  });

  describe('ACTION: SET_PET_BREED', () => {
    const petBreed = 'pomeranian';
    const action = { type: 'SET_PET_BREED', payload: { petBreed } };
    const newState = petsReducer(state, action);

    it('should update pet breed', () => {
      expect(newState.petBreed).toBe('pomeranian');
    });

    it('should return an object not strictly equal to the original', () => {
      expect(petsReducer(state, action)).not.toBe(state);
    });
  });

  describe('ACTION: RESET_NEW_PET', () => {
    const action = { type: 'RESET_NEW_PET' };
    const newState = petsReducer(state, action);

    it('should reset new pet state', () => {
      expect(newState.petName).toBe('');
      expect(newState.petType).toBe('dog');
      expect(newState.petAge).toBe(0);
      expect(newState.petBreed).toBe('');
    });

    it('should return an object not strictly equal to the original', () => {
      expect(petsReducer(state, action)).not.toBe(state);
    });
  });
});
