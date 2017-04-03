import React from 'react';

import UsernameFieldContainer from './UsernameFieldContainer';
import MainWrapper from '../components/MainWrapper';

class NewBattleContainer extends React.Component {
  
  render() {
    return (
      <MainWrapper>
        <h2>{this.props.route.header}</h2>
        <UsernameFieldContainer />
      </MainWrapper>
    )
  }
}

export default NewBattleContainer;