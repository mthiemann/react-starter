import React from 'react';

import UsernameFieldContainer from './UsernameFieldContainer';
import MainWrapper from '../components/MainWrapper';

const propTypes = {
  route: React.PropTypes.shape({
    header: React.PropTypes.string,
  }).isRequired,
};

const NewBattleContainer = props => (
  <MainWrapper>
    <h2>{props.route.header}</h2>
    <UsernameFieldContainer />
  </MainWrapper>
);

NewBattleContainer.propTypes = propTypes;

export default NewBattleContainer;
