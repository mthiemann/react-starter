import React from 'react';
import { Link } from 'react-router';

import Loading from './Loading';
import MainWrapper from './MainWrapper';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import styles from '../styles/index.css';


export default class ConfirmBattle extends React.Component {
  
  static propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    players: React.PropTypes.array.isRequired,
    onInitiateBattle: React.PropTypes.func.isRequired
  };
  
  puke (obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
  }
  
  render () {
    if(this.props.isLoading) {
      return <Loading />
    }
    
    let userTable = this.props.players.map((user, idx) => {
      return (
        <UserDetailsWrapper header={'Player ' + (idx+1)} key={user.id}>
          <UserDetails info={user} />
        </UserDetailsWrapper>
      )
    });
    
    return (
      <div>
        <h1 className='text-center'>Confirm Players</h1>
        <div className='container'>
          <div className='row'>
            {userTable}
          </div>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={this.props.onInitiateBattle}>Initiate Battle!</button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='newBattle'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
