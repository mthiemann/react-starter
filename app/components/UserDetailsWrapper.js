import React from 'react';

const propTypes = {
  header: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

const UserDetailsWrapper = props => (
  <div className="col-sm-3">
    <p className="lead">{props.header}</p>
    {props.children}
  </div>
);

UserDetailsWrapper.propTypes = propTypes;

export default UserDetailsWrapper;
