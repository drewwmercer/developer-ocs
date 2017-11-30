import React, { Component } from 'react';
import Time from 'react-time-format';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { SaveBtn } from '../../components/Save';
import { ReplyBtn } from '../../components/Reply';
import API from '../../utils/API';
import './SavedProjects.css';

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
                  <i className="fa fa-table" /> Saved Projects
                </strong>
              </h3>
            </div>

            {/* This main panel will hold each of the resulting projects */}
            {this.state.savedProjects.length ? (
              <List className="savedResults">
                {this.state.savedProjects.map(saved => {
                  return <ListItem key={saved.id} className="list-item">
                      <SaveBtn onClick={() => this.handleDeleteProject(saved.ProjectId)} />
                      &nbsp; &nbsp;
                      <ReplyBtn onClick={() => this.handleReply("saved.user.user_id", saved.Project.project_title)} />
                      &nbsp; &nbsp;
                      {saved.Project.id} &nbsp;
                      <Time value={saved.Project.posted_date} format="MM-DD-YYYY" />&nbsp;
                      <a href="" className="projTitle">
                        {saved.Project.project_title}
                      </a>
                    </ListItem>;
                })}
              </List>
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
