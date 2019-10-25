import React, {
  useState,
  useEffect,
} from 'react';

const MyPets = () => {
  useEffect(() => {
    fetch('http://localhost:3001/pets/1')
      .then(pets => pets.json())
      .then(pets => console.log('pets', pets))
      .catch(err => console.error('error fetching data', err));
  })

  return (
    <div>
      MyPets
      <button onClick={() => console.log('hi')}>Add New Pet</button>
    </div>   
  )
};

export default MyPets;