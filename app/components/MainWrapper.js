import React from 'react';

import styles from '../styles/index.css';


const MainWrapper = (props) => (
  <div className='jumbotron col-sm-8 col-sm-offset-2 text-center' style={styles.transparentBg}>
    {props.children}
  </div>
);

export default MainWrapper;