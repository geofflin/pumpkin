import React, {
  useState,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  pets: store.pets.pets,
});

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(actions.getPets()),
});


const MyPets = ({ getPets }) => {
  useEffect(getPets);

  return (
    <div>
      MyPets
      <button onClick={() => console.log('hi')}>Add New Pet</button>
    </div>   
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPets);