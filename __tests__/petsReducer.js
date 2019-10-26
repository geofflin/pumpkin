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
});
