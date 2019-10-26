import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PetProfile from '../components/PetProfile';

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

export default withRouter(MyPets);
