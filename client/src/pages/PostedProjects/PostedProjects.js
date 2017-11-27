import React, { Component } from 'react';
import Time from 'react-time-format';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';
import { SaveBtn } from '../../components/Save';
import './PostedProjects.css';
import API from '../../utils/API';

class PostedProjects extends Component {
  state = {
    postedProjects: [],
    user: {}
  };

  // Checks to see if user is logged in. If so, proceed to requested page, if not, redirect to login page
  componentDidMount() {
    API.isLoggedIn().then(res => {
      console.log(res);
      if (res.data.statusCode !== 401) {
        this.setState({ user: res.data });
        this.loadPostedProjects();
      } else {
        window.location.href = '/';
      }
    });
  }

  // Displays all posted projects for user
  loadPostedProjects = () => {
    API.getPosted(this.state.user.id)
      .then(res =>
        this.setState({
          postedProjects: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // Edit a post
  editPostedProject = id => {
    API.editPostedProject(id)
      .then(res => this.loadPostedProjects())
      .catch(err => console.log(err));
  };

  // // Deletes a project from the database with a given id, then reloads projects from the db
  removePostedProject = id => {
    API.removePostedProject(id)
      .then(res => this.loadPostedProjects())
      .catch(err => console.log(err));
  };

  render() {
    return (
      // This row will handle all of the posted projects
      <Row>
        <Col size="sm-12">
          <br />

          {/* This panel will initially be made up of a panel and wells for each of the projects retrieved */}
          <div className="panel">
            {/* Panel Heading for the saved projects box */}
            <div className="panel-heading">
              <h3 className="panel-title">
                <strong>
                  <i className="fa fa-table" /> Posted Projects
                </strong>
              </h3>
            </div>

            {/* This main panel will hold each of the resulting projects */}
            {this.state.postedProjects.length ? (
              <List className="savedResults">
                {this.state.postedProjects.map(project => {
                  return <ListItem key={project.id} class="list-item">
                      {/* <FormBtn className="editBtn" onClick={() => this.handleeditPostedProject(project.id, project.project_title)}>
                        ?
                      </FormBtn> */}
                      &nbsp; &nbsp;
                      <FormBtn className="delBtn" onClick={() => this.removePostedProject(project.id)}>
                        X
                      </FormBtn>
                      &nbsp; &nbsp;
                      {project.id} &nbsp;
                      <Time value={project.posted_date} format="MM-DD-YYYY" />&nbsp;
                      <a href="" class="title">
                        {project.project_title}
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

export default PostedProjects;
