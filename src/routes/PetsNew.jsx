import React from 'react';
import styles from './PetsNew.css';

const PetsNew = props => {
  const {
    handlePetTypeChange,
    handlePetNameChange,
    handlePetAgeChange,
    handlePetBreedChange,
    addNewPet,
  } = props;

  const submitNewPet = e => {
    e.preventDefault();
    addNewPet();
  };

  const ageOptions = [];
  for (let age = 0; age < 50; age += 1) {
    ageOptions.push(<option key={age} value={age}>{age}</option>);
  }

  return (
    <form className={styles.petForm} onSubmit={submitNewPet}>
      <section>
        <label htmlFor="petType">Type:</label>
        <select className={styles.petField} id="petType" onChange={e => handlePetTypeChange(e.target.value)}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </section>
      <section>
        <label htmlFor="name">Name:</label>
        <input
          className={styles.petField}
          type="text"
          name="name"
          id="name"
          onChange={e => handlePetNameChange(e.target.value)}
        />
      </section>
      <section>
        <label htmlFor="age">Age:</label>
        <select className={styles.petField} id="age" onChange={e => handlePetAgeChange(e.target.value)}>
          {ageOptions}
        </select>
      </section>
      <section>
        <label htmlFor="breed">Breed:</label>
        <input
          className={styles.petField}
          type="text"
          name="breed"
          id="breed"
          onChange={e => handlePetBreedChange(e.target.value)}
        />
      </section>
      <input className={styles.button} type="submit" value="Add Pet" />
    </form>
  );
};

export default PetsNew;
