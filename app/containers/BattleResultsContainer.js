import React from 'react';

import BattleResults from '../components/BattleResults';

import GithubRater from '../utils/GithubRater';


const propTypes = {
  location: React.PropTypes.shape({
    state: React.PropTypes.shape({
      players: React.PropTypes.arrayOf(React.PropTypes.object),
    }),
  }).isRequired,
};

class BattleResultsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.githubRater = new GithubRater();

    this.state = {
      isLoading: true,
      ranking: [],
    };

    this.isTie = false;
  }

  componentDidMount() {
    this.players = this.props.location.state.players;
    const usernames = this.players.map(player => player.login);

    this.setRanking(usernames);
  }

  setRanking(usernames) {
    this.githubRater.getRatings(usernames).then((ratings) => {
      const scoresAndPlayers = ratings.map((rating, idx) => ({
        score: rating,
        player: this.players[idx],
      }));

      let ranking = scoresAndPlayers;
      this.setTieResult(ratings);
      if (!this.isTie) {
        ranking = scoresAndPlayers.sort((a, b) => b.score - a.score);
      }

      this.setState({
        isLoading: false,
        ranking,
      });
    });
  }

  /**
   * Sets whether there is a tie or not on the 'isTie' property
   * @param ratings {array} of numbers
   * @returns {boolean}
   */
  setTieResult(ratings) {
    for (let i = 1; i < ratings.length; i += 1) {
      if (ratings[i] !== ratings[i - 1]) {
        this.isTie = false;
      }
    }
    this.isTie = true;
  }

  render() {
    return (
      <BattleResults
        isLoading={this.state.isLoading}
        ranking={this.state.ranking}
        isTie={this.isTie}
      />
    );
  }
}

BattleResultsContainer.propTypes = propTypes;

export default BattleResultsContainer;
