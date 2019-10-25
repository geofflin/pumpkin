import React, { Fragment } from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import MyPets from './routes/MyPets';
import PetsNew from './routes/PetsNew';
import PetsSuccess from './routes/PetsSuccess';

const App = () => (
  <Fragment>
    <div><Link to="/my-pets">Home</Link></div>
    <div><Link to="/pets/new">Add new pet</Link></div>
    <div><Link to="/pets/success">Successfully added pet</Link></div>
    <hr />
    <Switch>
      <Route exact path="/">
        <Redirect to="/my-pets" />
      </Route>
      <Route path="/my-pets" component={MyPets} />
      <Route path="/pets/new" component={PetsNew} />
      <Route path="/pets/success" component={PetsSuccess} />
    </Switch>
  </Fragment>
);

export default App;
