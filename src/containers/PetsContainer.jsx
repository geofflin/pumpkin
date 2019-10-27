import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import * as actions from '../actions/actions';
import MyPets from '../routes/MyPets';
import PetsNew from '../routes/PetsNew';
import PetsSuccess from '../routes/PetsSuccess';
import styles from './PetsContainer.css';

const mapStateToProps = store => ({
  ...store.pets,
});

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(actions.getPets()),
  handlePetTypeChange: petType => dispatch(actions.setPetType(petType)),
  handlePetNameChange: petName => dispatch(actions.setPetName(petName)),
  handlePetAgeChange: petAge => dispatch(actions.setPetAge(petAge)),
  handlePetBreedChange: petBreed => dispatch(actions.setPetBreed(petBreed)),
  resetNewPet: () => dispatch(actions.resetNewPet()),
  addNewPet: () => dispatch(actions.addNewPet()),
});

const PetsContainer = props => (
  <Fragment>
    <NavLink className={styles.navButton} to="/my-pets">Home</NavLink>
    <hr />
    <Switch>
      <Route exact path="/">
        <Redirect to="/my-pets" />
      </Route>
      <Route 
        exact path="/my-pets"
        render={() => <MyPets pets={props.pets} getPets={props.getPets} resetNewPet={props.resetNewPet} />}
      />
      <Route 
        exact path="/pets/new"
        render={() => (
          <PetsNew
            petID={props.petID}
            petType={props.petType}
            petName={props.petName}
            petAge={props.petAge}
            petBreed={props.petBreed}
            handlePetTypeChange={props.handlePetTypeChange}
            handlePetNameChange={props.handlePetNameChange}
            handlePetAgeChange={props.handlePetAgeChange}
            handlePetBreedChange={props.handlePetBreedChange}
            addNewPet={props.addNewPet}
          />
        )}
      />
      <Route exact path="/pets/success" render={() => <PetsSuccess petName={props.petName} />} />
    </Switch>
  </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
