import React from 'react';
import { addNewPet } from '../actions/actions';

const PetsNew = props => {

  const submitNewPet = e => {
    e.preventDefault();
    props.addNewPet(props.petID, props.petType, props.petName, props.petAge, props.petBreed);
  };

  const ageOptions = [];
  for (let age = 0; age < 50; age += 1) {
    ageOptions.push(<option key={age} value={age}>{age}</option>);
  }

  return (
    <form onSubmit={submitNewPet}>
      <section>
        <label htmlFor="petType">Type:</label>
        <select id="petType" onChange={e => props.handlePetTypeChange(e.target.value)}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </section>
      <section>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={e => props.handlePetNameChange(e.target.value)}
        />
      </section>
      <section>
        <label htmlFor="age">Age:</label>
        <select id="age" onChange={e => props.handlePetAgeChange(e.target.value)}>
          {ageOptions}
        </select>
      </section>
      <section>
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          name="breed"
          id="breed"
          onChange={e => props.handlePetBreedChange(e.target.value)}
        />
      </section>
      <input type="submit" value="Add Pet" />
    </form>
  );
};

export default PetsNew;
