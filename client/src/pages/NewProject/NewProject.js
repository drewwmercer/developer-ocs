import React, { Component } from 'react';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { Input, FormBtn, TextArea } from '../../components/Form';
import './NewProject.css';
import API from '../../utils/API';

class NewProject extends Component {
  state = {
    title: '',
    projDesc: '',
    langDesc: ''
  };

  // When the form is submitted, use the API.saveProject method to save the project data
  // Then reload projects from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.createProject({
        project_title: this.state.title,
        project_details: this.state.projDesc,
        primary_language: this.state.projLang,
        UserId: '3'
      })
        .then(res =>
          this.setState({
            title: '',
            projDesc: '',
            projLang: ''
          })
        )
        .catch(err => console.log(err));
    }
  };

  // <form method="post" id="myForm" action="dynaform.php" onSubmit="alert('Your project has been posted.');"

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
                  <TextArea
                    value={this.state.projDesc}
                    onChange={this.handleInputChange}
                    name="projDesc"
                    placeholder="Project Description (Required)"
                  />
                  {/* Language Parameter */}
                  <Input
                    value={this.state.projLang}
                    onChange={this.handleInputChange}
                    name="projLang"
                    placeholder="Languages Needed"
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
