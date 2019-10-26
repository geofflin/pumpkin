import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import * as actions from '../actions/actions';
import MyPets from '../routes/MyPets';
import PetsNew from '../routes/PetsNew';
import PetsSuccess from '../routes/PetsSuccess';

const mapStateToProps = store => ({
  ...store.pets,
});

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(actions.getPets()),
  handlePetTypeChange: petType => dispatch(actions.setPetType(petType)),
  handlePetNameChange: petName => dispatch(actions.setPetName(petName)),
  handlePetAgeChange: petAge => dispatch(actions.setPetAge(petAge)),
  handlePetBreedChange: petBreed => dispatch(actions.setPetBreed(petBreed)),
  addNewPet: () => dispatch(actions.addNewPet()),
});

const PetsContainer = props => (
  <Fragment>
    <Link to="/my-pets">Home</Link>
    <hr />
    <Switch>
      <Route exact path="/">
        <Redirect to="/my-pets" />
      </Route>
      <Route 
        exact path="/my-pets"
        render={() => <MyPets pets={props.pets} getPets={props.getPets}
      />} />
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
      <Route exact path="/pets/success" component={PetsSuccess} />
    </Switch>
  </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
