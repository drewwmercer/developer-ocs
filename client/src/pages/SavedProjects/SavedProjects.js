import React, { Component } from 'react';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
// import { DeleteBtn } from '../../components/DeleteBtn';
import './SavedProjects.css';
// import API from '../../utils/API';

class SavedProjects extends Component {
  state = {
    savedProjects: []
  }
    // componentDidMount() {
    //   this.loadSavedProjects();
    // }

    // loadSavedProjects = () => {
    //   API.getSavedProjects()
    //     .then(res =>
    //       this.setState({
    //         savedProjects: res.data
    //       })
    //     )
    //     .catch(err => console.log(err));
    // };

    // // Deletes a project from the database with a given id, then reloads projects from the db
    // deleteProject = id => {
    //   API.deleteProject(id)
    //     .then(res => this.loadSavedProjects())
    //     .catch(err => console.log(err));
    // };
 

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
                {this.state.savedProjects.map(project => {
                  return (
                    <ListItem key={project._id} className="list-item">
                      {/* <DeleteBtn className="deleteBtn" onClick={() => this.deleteProjects(project._id)}>
                        Delete
                      </DeleteBtn> */}
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

export default SavedProjects;
