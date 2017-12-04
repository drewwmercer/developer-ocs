import React, { Component } from 'react';
import Time from 'react-time-format';
import { Accordion, AccordionItem } from 'react-sanfona';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { SaveBtn } from '../../components/Save';
import { ReplyBtn } from '../../components/Reply';
import API from '../../utils/API';

class SavedProjects extends Component {
  state = {
    savedProjects: [],
    user: {}
  };

  // Checks to see if user is logged in. If so, proceed to requested page, if not, redirect to login page
  componentDidMount() {
    API.isLoggedIn().then(res => {
      console.log(res);
      if (res.data.statusCode !== 401) {
        this.setState({ user: res.data });
        this.loadSavedProjects();
      } else {
        window.location.href = '/';
      }
    });
  }

  loadSavedProjects = () => {
    API.getSavedProjects(this.state.user.id)
      .then(res =>
        this.setState({
          savedProjects: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // // Deletes a project from the database with a given id, then reloads projects from the db
  handleDeleteProject = id => {
    API.deleteProject({ ProjectId: id, user_id: this.state.user.id })
      .then(res => this.loadSavedProjects())
      .catch(err => console.log(err));
  };

  // Opens email client to reply to project post
  handleReply = (email, title) => {
    window.location.href = 'mailto:' + email + '?subject=' + title;
  };

  render() {
    return (
      // This row will handle all of the saved projects
      <Row>
        <Col size="sm-12">
          <br />

          {/* This panel will initially be made up of a panel and wells for each of the projects retrieved */}
          <div className="panel">
            {/* Panel Heading for the saved projects box */}
            <div className="panel-heading">
              <h3 className="panel-title">
                <strong>
                  <i className="fa fa-table" /> My Saved Projects
                </strong>
              </h3>
            </div>

            {/* This main panel will hold each of the resulting projects */}
            {this.state.savedProjects.length ? (
              <Accordion allowMultiple="true" className="searchResults">
                {this.state.savedProjects.map(saved => {
                  return (
                    <AccordionItem
                      key={saved.id}
                      title={saved.Project.project_title}
                      className="projectTitle"
                    >
                      <div className="projectDetails">
                        <strong>Date Posted:</strong>{' '}
                        <Time
                          value={saved.Project.posted_date}
                          format="MM-DD-YYYY"
                        />
                        <br />
                        <br />
                        <div>
                          <strong>Project Details: </strong>
                          <br />
                          {saved.Project.project_details}
                        </div>
                        <br />
                        <div>
                          <strong>Languages Needed: </strong>{' '}
                          {saved.Project.primary_language}
                        </div>
                        <br />
                        <div className="buttons">
                          <SaveBtn
                            onClick={() =>
                              this.handleSaveProject(saved.Project.id)}
                          />
                          &nbsp; &nbsp;
                          <ReplyBtn
                            onClick={() =>
                              this.handleReply(
                                saved.Project.user.user_id,
                                saved.Project.project_title
                              )}
                          />
                        </div>
                        <div className="idNumber">
                          <strong>Project Id: </strong>
                          {saved.Project.id}
                        </div>
                      </div>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : (
              <List>
                <ListItem>
                  <h3 class="noRes">No Results to Display</h3>
                </ListItem>
              </List>
            )}
          </div>
        </Col>
      </Row>
    );
  }
}

export default SavedProjects;
