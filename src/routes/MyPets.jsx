import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PetProfile from '../components/PetProfile';

const mapStateToProps = store => ({
  pets: store.pets.pets,
});

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(actions.getPets()),
});

const MyPets = ({ pets, getPets, history }) => {
  useEffect(getPets, []);

  const myPets = pets.map(pet => <PetProfile key={pet.id} pet={pet} />);
  return (
    <div>
      <button onClick={() => history.push('/pets/new')}>Add New Pet</button>
      {myPets}
    </div>   
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPets);