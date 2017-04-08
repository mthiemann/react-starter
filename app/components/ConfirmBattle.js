import React from 'react';
import { Link } from 'react-router';

import Loading from './Loading';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import styles from '../styles/index.css';


const propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  players: React.PropTypes.array.isRequired,
  onInitiateBattle: React.PropTypes.func.isRequired,
};

const ConfirmBattle = (props) => {
  if (props.isLoading) {
    return <Loading />;
  }

  const userTable = props.players.map((user, idx) => (
    <UserDetailsWrapper header={`Player ${idx + 1}`} key={user.id}>
      <UserDetails info={user} />
    </UserDetailsWrapper>
  ));

  return (
    <div>
      <h1 className="text-center">Confirm Players</h1>
      <div className="container">
        <div className="row">
          {userTable}
        </div>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button
            type="button"
            className="btn btn-lg btn-success"
            onClick={props.onInitiateBattle}
          >
            Initiate Battle!
          </button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <Link to="newBattle">
            <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ConfirmBattle.propTypes = propTypes;

export default ConfirmBattle;
