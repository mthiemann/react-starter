import React from 'react';

import ConfirmBattle from '../components/ConfirmBattle';

import GithubHelper from '../utils/GithubHelper';


export default class ConfirmBattleContainer extends React.Component {
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  constructor (props) {
    super(props);
    
    this.state = {
      isLoading: true,
      players: []
    };
    
    this.githubHelper = new GithubHelper();
  }
  
  componentDidMount () {
    let users = this.context.router.location.state.users;
    let usernames = users.map((user) => {
      return user.username;
    });
    
    this.githubHelper.getUsers(usernames).then((users) => {
      this.setState({
        isLoading: false,
        players: users
      });
    });
  }
  
  handleInitiateBattle () {
    this.context.router.push({
      pathname: 'results',
      state: {
        players: this.state.players
      }
    });
  }
  
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        players={this.state.players}
        onInitiateBattle={() => this.handleInitiateBattle()} />
    )
  }
};