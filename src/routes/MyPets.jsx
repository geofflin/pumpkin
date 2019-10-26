import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PetProfile from '../components/PetProfile';

const MyPets = ({ pets, getPets, resetNewPet, history }) => {
  useEffect(getPets, []);
  const myPets = pets.map(pet => <PetProfile key={pet.id} pet={pet} />);
  const handleClick = () => {
    resetNewPet();
    history.push('/pets/new');
  }

  return (
    <div>
      <button onClick={handleClick}>Add New Pet</button>
      {myPets}
    </div>   
  );
};

export default withRouter(MyPets);
