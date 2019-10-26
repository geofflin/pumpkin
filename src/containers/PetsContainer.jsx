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
});

const PetsContainer = ({
  pets,
  petID,
  petType,
  petName,
  petAge,
  petBreed,
  getPets,
  handlePetTypeChange,
  handlePetNameChange,
  handlePetAgeChange,
  handlePetBreedChange,
}) => (
  <Fragment>
    <Link to="/my-pets">Home</Link>
    <hr />
    <Switch>
      <Route exact path="/">
        <Redirect to="/my-pets" />
      </Route>
      <Route exact path="/my-pets" render={() => <MyPets pets={pets} getPets={getPets} />} />
      <Route 
        exact path="/pets/new"
        render={() => (
          <PetsNew
            petID={petID}
            petType={petType}
            petName={petName}
            petAge={petAge}
            petBreed={petBreed}
            handlePetTypeChange={handlePetTypeChange}
            handlePetNameChange={handlePetNameChange}
            handlePetAgeChange={handlePetAgeChange}
            handlePetBreedChange={handlePetBreedChange}
          />
        )}
      />
      <Route exact path="/pets/success" component={PetsSuccess} />
    </Switch>
  </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
