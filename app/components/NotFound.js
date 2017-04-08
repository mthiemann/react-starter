import React from 'react';


const propTypes = {
  second: React.PropTypes.number.isRequired,
};

const NotFound = props => (
  <div className="jumbotron text-center">
    <h1 className="text-center">#404 - Page not found!</h1>
    <p>You will be redirected in {props.second} seconds</p>
  </div>
);

NotFound.propTypes = propTypes;

export default NotFound;
