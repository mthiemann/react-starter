import React from 'react';
import { Link } from 'react-router';

import Loading from './Loading';
import MainWrapper from './MainWrapper';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';


const StartOver = () => (
  <div>
    <Link to="newBattle">
      <button className="btn btn-warning">
        Start Over
      </button>
    </Link>
  </div>
);

const propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  ranking: React.PropTypes.array.isRequired,
  isTie: React.PropTypes.bool.isRequired,
};

class BattleResults extends React.Component {

  getRankingTable() {
    return this.props.ranking.map((ranking, idx) => {
      let header = '';
      if (!this.props.isTie) {
        const position = `${idx} + 1 + .`;
        header = (idx === 0) ? <b>{position}</b> : position;
      }

      return (
        <UserDetailsWrapper header={header} key={ranking.player.id}>
          <UserDetails score={ranking.score} info={ranking.player} />
        </UserDetailsWrapper>
      );
    });
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />;
    }

    // If results are available
    return (
      <MainWrapper>
        <StartOver />
        {this.props.isTie && <h2 className="text-center">It is a tie!</h2>}
        {this.getRankingTable()}
      </MainWrapper>
    );
  }
}

BattleResults.propTypes = propTypes;

export default BattleResults;
