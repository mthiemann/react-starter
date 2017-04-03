import React from 'react';

class UserDetailsWrapper extends React.Component {
  
  static propTypes = {
    header: React.PropTypes.string.isRequired
  };
  
  render() {
    return (
      <div className='col-sm-3'>
        <p className='lead'>{this.props.header}</p>
        {this.props.children}
      </div>
    )
  }
}

export default UserDetailsWrapper;