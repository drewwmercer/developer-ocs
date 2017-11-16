import React, { Component } from 'react';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';
import { SaveBtn } from '../../components/SaveBtn';
import './AllProjects.css';
// import API from '../../utils/API';

class AllProjects extends Component {
  state = {
    projects: []
  };

  // When the form is submitted, use the API.saveProject method to save the project data
  // Then reload projects from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title) {
  //     API.getProjects({
  //       title: this.state.title,
  //       projDesc: this.state.projDesc,
  //     })
  //       .then(res =>
  //         this.setState({
  //           projects: res.data.response.docs,
  //           title: '',
  //           projDesc: '',
  //         })
  //       )
  //       .catch(err => console.log(err));
  //   }
  // };

  // handleSaveProject = (title, id) => {
  //   API.saveProject({ title: title, projectId: id })
  //     .then(res => this.props.loadSaved())
  //     .catch(err => console.log(err));
  // };

  // // Handles updating component state when the user types into the input field
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  

  render() {
    return (
      <div>
        {/* // This row will handle all of the projects */}
        <Row>
          <Col size="sm-12">
            <br />

            {/* This panel will initially be made up of a panel and wells for each of the projects retrieved */}
            <div className="panel panel-primary">
              {this.state.projects.length ? (
                <List className="searchResults">
                  {this.state.projects.map(project => {
                    return (
                      <ListItem key={project._id}>
                        {/* <SaveBtn
                          onClick={() =>
                            this.handleSaveProject(project._id, project.title)}
                        >
                          {{ SaveBtn }}
                        </SaveBtn> */}
                        &nbsp; &nbsp;
                        {project.date} &nbsp;
                        <a href="" target="_blank" class="projTitle">
                          {project.title}
                        </a>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AllProjects;
