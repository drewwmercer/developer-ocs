import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Time from 'react-time-format';
import { Accordion, AccordionItem } from 'react-sanfona';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';
import { SaveBtn } from '../../components/Save';
import { ReplyBtn } from '../../components/Reply';
import API from '../../utils/API';

class AllProjects extends Component {
  state = {
    projects: [],
    filteredProjects: [], // Add a new state variable for filtered projects
    user: {},
    searchQuery: '', // Add a new state variable for search query
  };

  componentDidMount() {
    API.isLoggedIn().then(res => {
      console.log(res);
      if (res.data.statusCode !== 401) {
        this.setState({ user: res.data });
        this.loadAllProjects();
      } else {
        window.location.href = '/';
      }
    });
  }

  // Handle changes in the search input
  handleSearchInputChange = (event) => {
    const { value } = event.target;
    this.setState({ searchQuery: value }, () => {
      this.loadAllProjects();
    });
  };

  // Modify the loadAllProjects method to filter projects based on the search query
  loadAllProjects = () => {
    API.getProjects()
      .then((res) => {
        const filteredProjects = res.data.filter((project) =>
          project.project_title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        );
        this.setState({
          projects: res.data,
          filteredProjects,
        });
      })
      .catch((err) => console.log(err));
  };

  // When the form is submitted, use the API.saveProject method to save the project data
  // Then reload projects from the database
  // ... (unchanged code)

  // Saves/favorites a project
  handleSaveProject = id => {
    API.saveProject({ project_id: id, user_id: this.state.user.id })
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

  // Opens email client to reply to project post
  handleReply = (email, title) => {
    window.location.href = 'mailto:' + email + '?subject=' + title;
  };

  // Updates save icon display to show if project is in saved status
  loadSaved = () => {
    // ToDo: get saved projects and merge them with this.state.projects... set savedFlag to true. savedFlag === true would need to prevent duplicate saves
  };

  render() {
    return (
      <div>
        {/* Add a search input */}
        <Row>
          <Col size="sm-12">
            <input
              type="text"
              placeholder="Search projects"
              value={this.state.searchQuery}
              onChange={this.handleSearchInputChange}
            />
          </Col>
        </Row>

        {/* This row will handle all of the projects */}
        <Row>
          <Col size="sm-12">
            <br />

            {/* This panel will initially be made up of a panel and wells for each of the projects retrieved */}
            <div className="panel panel-primary">
              {this.state.filteredProjects.length ? (
                <Accordion allowMultiple="true" className="searchResults">
                  {this.state.filteredProjects.map((project) => {
                    return (
                      <AccordionItem
                        key={project.id}
                        title={project.project_title}
                        className="projectTitle"
                      >
                        <div className="projectDetails">
                          <strong>Date Posted:</strong>{' '}
                          <Time
                            value={project.posted_date}
                            format="MM-DD-YYYY"
                          />
                          <br />
                          <br />
                          <div>
                            <strong>Project Details: </strong>
                            <br />
                            {project.project_details}
                          </div>
                          <br />
                          <div>
                            <strong>Languages Needed: </strong>{' '}
                            {project.primary_language}
                          </div>
                          <br />
                          <div className="buttons">
                            <SaveBtn
                              onClick={() => this.handleSaveProject(project.id)}
                            />
                            &nbsp; &nbsp;
                            <ReplyBtn
                              onClick={() =>
                                this.handleReply(
                                  project.User.user_email,
                                  project.project_title

                                )}
                            />
                          </div>
                          <div className="idNumber">
                            <strong>Project Id: </strong>
                            {project.id}
                          </div>
                        </div>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              ) : (
                <List>
                  <ListItem>
                    <h3 className="noRes">No Results to Display</h3>
                  </ListItem>
                </List>
              )}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AllProjects;


// added searchQuery