import React from 'react';

import BattleResults from '../components/BattleResults';

import GithubRater from '../utils/GithubRater';


class BattleResultsContainer extends React.Component {
  
  constructor (props) {
    super(props);
    this.githubRater = new GithubRater();
    
    this.state = {
      isLoading: true,
      ranking: []
    };
    
    this.isTie = false;
  }
  
  componentDidMount () {
    this.players = this.props.location.state.players;
    let usernames = this.players.map((player) => {
      return player.login;
    });
  
    this.setRanking(usernames);
  }
  
  /**
   * Checks whether an array of ratings holds the same values for each element
   * @param ratings {array} of numbers
   * @returns {boolean}
   */
  isATie(ratings) {
    for(let i = 1; i < ratings.length; i++) {
      if(ratings[i] !== ratings[i-1]) {
        return false;
      }
    }
    return true;
  }
  
  setRanking (usernames) {
    this.githubRater.getRatings(usernames).then((ratings) => {
      
      let scoresAndPlayers = ratings.map((rating, idx) => {
        return {
          score: rating,
          player: this.players[idx]
        }
      });
      
      let ranking = scoresAndPlayers;
      this.isTie = this.isATie(ratings);
      if(!this.isTie) {
        ranking = scoresAndPlayers.sort((a, b) => b.score - a.score);
      }
      
      this.setState({
        isLoading: false,
        ranking: ranking
      })
    });
  }
  
  render() {
    return (
      <BattleResults
        isLoading={this.state.isLoading}
        ranking={this.state.ranking}
        isTie={this.isTie} />
    )
  }
}

export default BattleResultsContainer;