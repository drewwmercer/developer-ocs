import axios from 'axios';

export default {
  // Gets project details
  getDetails: searchValues => {},

  // Gets all projects
  getProjects: searchValues => {
    return axios.get('/api/projects/');
  },

  // Gets saved projects
  getSavedProjects: searchValues => {
    return axios.get('/api/projects/saved');
  },

  // Gets all posted projects
  getPosted: searchValues => {},

  // Deletes the saved project with the given id
  deleteProject: id => {
    return axios.delete('/api/projects/' + id);
  },

  // Saves a project to the database
  saveProject: projectData => {
    return axios.post('/api/projects', projectData);
  }
};
