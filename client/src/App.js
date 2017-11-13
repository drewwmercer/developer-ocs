import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from './components/Grid';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Container fluid>
      <Nav />
      <Switch>
        <Route path="/:saved" component={Saved} />
        <Route path="/" component={Search} />
        {Route path='/:favorited' component={}}
      </Switch>
    </Container>
  </Router>
);

export default App;
