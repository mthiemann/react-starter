import axios from 'axios';

class GithubHelper {
  
  constructor () {
    this.accessToken = 'a296feebbfd5efd9d7c9610da627c409ec03fcd2';
    this.endpoints = {
      root: 'https://api.github.com',
      users: '/users/'
    };
  }
  
  /**
   * Constructs a full query url for a given endpoint
   * @param endpoint {string}
   * @returns {string}
   */
  getURL (endpoint) {
    return this.endpoints.root + endpoint + '?access_token=' + this.accessToken;
  }
  
  /**
   * Get user data for the passed GitHub username
   * @param username {Promise} value: username object
   */
  getUser (username) {
    return axios.get(this.getURL(this.endpoints.users + username));
  }
  
  getRepos (username) {
    return axios.get(this.getURL(this.endpoints.users + username + '/repos'));
  }
  
  getTotalStars (repos) {
    return repos.then((repos) => {
      return repos.data.reduce((stars, repo) => {
        return stars + repo.stargazers_count;
      }, 0)
    })
  }
  
  /**
   * Get a promise containing user data from the GitHub API for all provided usernames
   * @param usernames {array}
   * @returns {Promise} An array, each element holds user data for a single user
   */
  getUsers (usernames) {
    return axios.all(usernames.map((username) => {
      return this.getUser(username);
    }))
      .then((users) => {
        return users.map((user) => {
          return user.data;
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
}

export default GithubHelper;