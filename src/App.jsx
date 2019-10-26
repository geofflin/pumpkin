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
    <Link to="/my-pets">Home</Link>
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
