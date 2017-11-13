import React, { Component } from 'react';
import { List, ListItem } from '../../components/List';
import { Col, Row } from '../../components/Grid';
import { FormBtn } from '../../components/Form';
import API from '../../utils/API';

class Saved extends Component {
  state = {
    savedProjects: []
  };

  componentDidMount() {
    this.loadSavedProjects();
  }

  loadSavedProjects = () => {
    API.getSavedProjects()
      .then(res =>
        this.setState({
          savedProjects: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // Deletes a project from the database with a given id, then reloads projects from the db
  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadSavedProjects())
      .catch(err => console.log(err));
  };

  render() {
    return (
      // This row will handle all of the saved projects
      <Row>
        <Col size="sm-12">
          <br />

          {/* This panel will initially be made up of a panel and wells for each of the projects retrieved */}
          <div className="panel panel-primary">
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
                    <ListItem key={project._id} style={{ height: '67px' }}>
                      <a href={project.url} target="_blank">
                        <strong>{project.title}</strong>
                      </a>
                      <FormBtn
                        onClick={() => this.deleteProjects(project._id)}
                        style={{
                          padding: 0,
                          position: 'absolute',
                          right: '20px'
                        }}
                      >
                        Delete
                      </FormBtn>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3 style={{ marginLeft: 15 }}>No Results to Display</h3>
            )}
          </div>
        </Col>
      </Row>
    );
  }
}

export default Saved;
