import React from 'react';
import styles from './PetProfile.css'

const PetProfile = ({ pet }) => {
  return (
    <div className={styles.gridItem}>
      <h2>{pet.name}</h2>
      <ul className={styles.list}>
        <li>Type: {pet.petType}</li>
        <li>Age: {pet.age}</li>
        <li>Breed: {pet.breed}</li>
      </ul>
    </div>
  );
};

export default PetProfile;
