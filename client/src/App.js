import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from './components/Grid';
import Saved from './pages/Saved';
import Project from './pages/Project';
import New from '.pages/New';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Container fluid>
      <Nav />
      <Switch>
        <Route path="/:saved" component={Saved} />
        <Route path="/" component={Project} />
        <Route path='/:post' component={New} />
      </Switch>
    </Container>
  </Router>
);

export default App;
