import React from 'react';

const PetProfile = ({ pet }) => {
  return (
    <div>
      <h2>PetProfile</h2>
      <p>ID: {pet.id}</p>
      <p>Type: {pet.dog}</p>
      <p>Name: {pet.name}</p>
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breed}</p>
    </div>
  );
};

export default PetProfile;
