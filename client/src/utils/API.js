import axios from 'axios';

export default {
  // Check if user is logged in
  isLoggedIn: () => {
    return axios.get('/auth/loggedIn');
  }, 

  // Gets project details
  getDetails: searchValues => {},

  // Gets all projects
  getProjects: searchValues => {
    return axios.get('/api/projects/');
  },

  // Saves a new project post
  createProject: projectData => {
    return axios.post('/api/projects', projectData);
  },

  // Edit a project post
  editPostedProject: projectData => {
    return axios.post('/api/projects/edit', projectData);
  },

  // Delete a project post
  removePostedProject: id => {
    return axios.delete('/api/projects/' + id);
  },

  // Gets all posted projects
  getPosted: id => {
    return axios.get('/api/projects/' + id);
  },

  // Gets saved projects
  getSavedProjects: id => {
    return axios.get('/api/projects/saved/' + id);
  },

  // Deletes the saved project with the given id
  deleteProject: id => {
    return axios.delete('/api/projects/saved/' + id);
  },

  // Favoriting a project to the database
  saveProject: projectData => {
    return axios.post('/api/projects/saved', projectData);
  }
};
