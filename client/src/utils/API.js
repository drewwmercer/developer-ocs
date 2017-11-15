

export default {
  // // Gets all projects
  getProject: searchValues => {
    var queryURL = queryURLBase + searchValues.title;

  },

  // Deletes the saved project with the given id
  deleteProject: id => {
    return axios.delete('/api/projects/' + id);
  },

  // Saves a project to the database
  saveProject: projectData => {
    return axios.post('/api/projects', projectData);
  }
};
