import React from 'react';

import ConfirmBattle from '../components/ConfirmBattle';

import GithubHelper from '../utils/GithubHelper';


const contextTypes = {
  router: React.PropTypes.object.isRequired,
};

class ConfirmBattleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      players: [],
    };

    this.githubHelper = new GithubHelper();
  }

  componentDidMount() {
    const users = this.context.router.location.state.users;
    const usernames = users.map(user => user.username);

    this.githubHelper.getUsers(usernames).then((gitHubUsers) => {
      this.setState({
        isLoading: false,
        players: gitHubUsers,
      });
    });
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: 'results',
      state: {
        players: this.state.players,
      },
    });
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        players={this.state.players}
        onInitiateBattle={() => this.handleInitiateBattle()}
      />
    );
  }
}

ConfirmBattleContainer.contextTypes = contextTypes;

export default ConfirmBattleContainer;
