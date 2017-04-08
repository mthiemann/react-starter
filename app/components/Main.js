import React from 'react';

import Navigation from './Navigation';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

const Main = props => (
  <div>
    <Navigation />
    {props.children}
  </div>
);

Main.propTypes = propTypes;

export default Main;
