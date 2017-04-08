import axios from 'axios';
import GithubHelper from './GithubHelper';

class GithubRater {

  constructor() {
    this.githubHelper = new GithubHelper();
  }

  /**
   * The repo rating is just the number of repos
   * @returns {Promise}
   */
  getReposRating(username) {
    return this.githubHelper.getRepos(username).then(repos => repos.data.length);
  }

  /**
   * The total star rating has a multiplier of 2
   * @returns {Promise}
   */
  getTotalStarsRating(username) {
    return this.githubHelper.getTotalStars(username)
      .then(stars => stars * 2);
  }

  /**
   * Returns the rating for the passed GitHub username
   * @param username {string} GitHub username
   * @returns {Promise} value: number
   */
  getRating(username) {
    if (!username) {
      console.warn('No username provided!');
    }

    return axios.all([this.getTotalStarsRating(username), this.getReposRating(username)])
      .then(ratings => ratings.reduce((a, b) => a + b));
  }

  /**
   * Returns the ratings for the passed GitHub usernames
   * @param usernames {string} GitHub usernames
   * @returns {Promise} value: array
   */
  getRatings(usernames) {
    return axios.all(usernames.map(username => this.getRating(username)));
  }
}

export default GithubRater;
