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


const MyPets = ({ pets, getPets }) => {
  useEffect(getPets, []);

  const myPets = pets.map(pet => <PetProfile key={pet.id} pet={pet} />);
  return (
    <div>
      {myPets}
      <button onClick={() => console.log('hi')}>Add New Pet</button>
    </div>   
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPets);