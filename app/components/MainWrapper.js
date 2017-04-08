import React from 'react';

import styles from '../styles/index.css';


const propTypes = {
  children: React.PropTypes.any.isRequired,
};

const MainWrapper = props => (
  <div className="jumbotron col-sm-8 col-sm-offset-2 text-center" style={styles.transparentBg}>
    {props.children}
  </div>
);

MainWrapper.propTypes = propTypes;

export default MainWrapper;
