import React, { Fragment } from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import MyPets from './components/MyPets';

const App = () => (
  <Fragment>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/my-pets">My Pets</Link></div>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/my-pets" component={MyPets} />
      <Route path="/pets/new" component={MyPets} />
      <Route path="/pets/success" component={MyPets} />
    </Switch>
  </Fragment>
);

export default App;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}