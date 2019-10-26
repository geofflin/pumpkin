import React from 'react';

const PetsNew = ({ pets, petName, getPets, handlePetNameChange }) => {
  const submitNewPet = e => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form onSubmit={submitNewPet}>
      <section>
        <label htmlFor="id">ID:</label>
        <input type="text" name="id" id="id" />
      </section>
      <section>
        <label htmlFor="petType">Type:</label>
        <input type="text" name="petType" id="petType" />
      </section>
      <section>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={e => handlePetNameChange(e.target.value)}
        />
      </section>
      <section>
        <label htmlFor="age">Age:</label>
        <input type="text" name="age" id="age" />
      </section>
      <section>
        <label htmlFor="breed">Breed:</label>
        <input type="text" name="breed" id="breed" />
      </section>
      <input type="submit" value="Add Pet" />
    </form>
  );
};

export default PetsNew;
