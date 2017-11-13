import React, { Component } from 'react';
import { Container } from '../../components/Grid';
import Saved from '../Saved';

class Main extends Component {
  render() {
    return (
      <Container fluid>
        <Search loadSaved={this.loadSavedProjects} />
        <Saved
          loadSaved={this.loadSavedProjects}
          articles={this.state.savedProjects}
        />
      </Container>
    );
  }
}

export default Main;
