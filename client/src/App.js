import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from './components/Grid';
import LoggedIn from './pages/LoggedIn';
import PostedProjects from './pages/PostedProjects';
import SavedProjects from './pages/SavedProjects';
import AllProjects from './pages/AllProjects';
import NewProject from './pages/NewProject';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Container fluid>
      <Nav />
      <Switch>
        <Route path="/posted" component={PostedProjects} />
        <Route path="/loggedin" component={LoggedIn} />
        <Route path="/saved" component={SavedProjects} />
        <Route path="/new" component={NewProject} />
        <Route path="/" component={AllProjects} />
      </Switch>
    </Container>
  </Router>
);

export default App;
