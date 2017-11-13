

export default {
  // // Gets all articles
  getArticles: searchValues => {
    var queryURL = queryURLBase + searchValues.title;

    // Number of results the user would like displayed
    // numResults = 5;

    // If the user provides a startYear -- the startYear will be included in the queryURL
    if (parseInt(searchValues.startYear, 10)) {
      queryURL = queryURL + '&begin_date=' + searchValues.startYear + '0101';
    }

    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (parseInt(searchValues.endYear, 10)) {
      queryURL = queryURL + '&end_date=' + searchValues.endYear + '0101';
    }

    return axios.get(queryURL);
  },

  // Gets all articles
  getSavedArticles: () => {
    return axios.get('/api/articles');
  },

  // Deletes the article with the given id
  deleteArticle: id => {
    return axios.delete('/api/articles/' + id);
  },

  // Saves a article to the database
  saveArticle: articleData => {
    return axios.post('/api/articles', articleData);
  }
};
