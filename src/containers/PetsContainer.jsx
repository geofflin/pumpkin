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
  pets: store.pets.pets,
});

const mapDispatchToProps = dispatch => ({
  getPets: () => dispatch(actions.getPets()),
});

const PetsContainer = ({ pets, getPets }) => (
  <Fragment>
    <Link to="/my-pets">Home</Link>
    <hr />
    <Switch>
      <Route exact path="/">
        <Redirect to="/my-pets" />
      </Route>
      <Route exact path="/my-pets" render={() => <MyPets pets={pets} getPets={getPets} />} />
      <Route exact path="/pets/new" render={() => <PetsNew pets={pets} />} />
      <Route exact path="/pets/success" component={PetsSuccess} />
    </Switch>
  </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
