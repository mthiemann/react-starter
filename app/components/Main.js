import React from 'react';

import Navigation from './Navigation';

export default (props) => (
  <div>
    <Navigation />
    {props.children}
  </div>
)
