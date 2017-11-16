import React, { Component } from 'react';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';
// import API from '../../utils/API';

class PostedProjects extends Component {
  state = {
    postedProjects: []
  };

  // componentDidMount() {
  //   this.loadPostedProjects();
  // }

  // loadPostedProjects = () => {
  //   API.getPostedProjects()
  //     .then(res =>
  //       this.setState({
  //         postedProjects: res.data
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a project from the database with a given id, then reloads projects from the db
  // deleteProject = id => {
  //   API.deleteProject(id)
  //     .then(res => this.loadPostedProjects())
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      // This row will handle all of the posted projects
      <Row>
        <Col size="sm-12">
          <br />

          {/* This panel will initially be made up of a panel and wells for each of the projects retrieved */}
          <div className="panel panel-primary">
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
                  return (
                    <ListItem key={project._id} class="list-item">
                      <FormBtn
                        onClick={() => this.deleteProjects(project._id)}
                      >
                        Delete
                      </FormBtn>
                      &nbsp; &nbsp;
                      {project.date} &nbsp;
                      <a href="" target="_blank" class="title">
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
    );
  }
}


export default PostedProjects;
