import React from 'react';

const PetProfile = ({ pet }) => {
  return (
    <div>
      <h2>Pet {pet.id}</h2>
      <p>Type: {pet.petType}</p>
      <p>Name: {pet.name}</p>
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breed}</p>
    </div>
  );
};

export default PetProfile;
