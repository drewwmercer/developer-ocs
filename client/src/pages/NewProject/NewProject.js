import React, { Component } from 'react';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import './NewProject.css';
// import API from '../../utils/API';

class NewProject extends Component {
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
  //       projDesc: this.state.projDesc
  //     })
  //       .then(res =>
  //         this.setState({
  //           projects: res.data.response.docs,
  //           title: '',
  //           projDesc: ''
  //         })
  //       )
  //       .catch(err => console.log(err));
  //   }
  // };

  // <form method="post" id="myForm" action="dynaform.php" onSubmit="alert('Your project has been submitted.');"

  // handleSaveProject = (title, url, id) => {
  //   API.saveProject({ title: title, url: url, projectId: id })
  //     .then(res => this.props.loadSaved())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  render() {
    return (
      <div>
        <Row>
          <Col size="sm-12">
            <br />
            {/* Handling the project post */}
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <strong>
                    <i className="fa  fa-list-alt" /> Post Your Project
                  </strong>
                </h3>
              </div>
              <div className="panel-body">
                {/* Here we create an HTML Form for handling the inputs */}
                <form>
                  {/* Project Title */}
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (Required)"
                  />
                  {/* Description Parameter */}
                  <Input
                    value={this.state.projDesc}
                    onChange={this.handleInputChange}
                    name="projDesc"
                    placeholder="Project Description (Required)"
                  />
                  {/* <!-- Submit button */}
                  <FormBtn
                    disabled={!this.state.title}
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewProject;
