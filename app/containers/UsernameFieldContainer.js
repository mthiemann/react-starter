import React from 'react';

import MainWrapper from '../components/MainWrapper';
import ButtonField from '../components/ButtonField';

const PropTypes = React.PropTypes;


class UsernameFieldContainer extends React.Component {
  
  static propTypes = {
    minUsers: PropTypes.number,
    maxUsers: PropTypes.number
  };
  
  static defaultProps = {
    minUsers: 2,
    maxUsers: 4
  };
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  
  constructor (props) {
    super(props);
    
    this.keyCounter = 0;
    
    let users = [];
    for(let i = 0; i < this.props.minUsers; i++) {
      users.push(this.getNewUser());
    }
    
    this.state = {
      users: users,
      showRemoveOptions: false,
      showAddUserButton: true
    };
  }
  
  getNewUser () {
    return {
      key: this.keyCounter++,
      username: ''
    }
  }
  
  handleUpdateUsername (e, idx) {
    let users = this.state.users.slice();
    users[idx]['username'] = e.target.value;
    
    this.setState({ users: users })
  }
  
  handleSubmit (e) {
    e.preventDefault();
    
    this.context.router.push({
      pathname: 'confirmBattle',
      state: {
        users: this.state.users
      }
    });
  }
  
  handleAddUser (e) {
    e.preventDefault(); // prevent default behavior of button, namely submit
    
    // Remove add user button if maximum number of users is reached after adding
    if(this.state.users.length >= this.props.maxUsers - 1) {
      this.setState({ showAddUserButton: false });
    }
    
    // Add user if maximum number of users is not yet reached
    if(this.state.users.length < this.props.maxUsers) {
      this.setState({
        users: this.state.users.concat(this.getNewUser()),
        showRemoveOptions: true
      });
    }
  }
  
  handleRemoveUser (idx) {
  
    // Remove remove options if minimum number of users is reached after removing
    if(this.state.users.length <= this.props.minUsers + 1) {
      this.setState({ showRemoveOptions: false });
    }
    
    // Remove user if minimum number of users is not yet reached
    if(this.state.users.length > this.props.minUsers) {
      this.setState({
        users: this.state.users.filter((user, index) => index !== idx),
        showAddUserButton: true
      })
    }
  }
  
  render() {
    
    let buttonFields = this.state.users.map((user, idx) => {
      return (
        <ButtonField key={user.key}
                     id={idx}
                     showButton={this.state.showRemoveOptions}
                     buttonText={'x'}
                     onChange={(e) => this.handleUpdateUsername(e, idx)}
                     onButtonClick={() => this.handleRemoveUser(idx)} />
      )
    });
    
    return (
      <div>
        <form className="form-horizontal col-sm-6 col-sm-offset-3" onSubmit={(e) => this.handleSubmit(e)}>
          {buttonFields}
          { this.state.showAddUserButton &&
            <div style={{margin: '10px'}}>
              <button className='btn btn-default' onClick={(e) => this.handleAddUser(e)}>Add user</button>
            </div>
          }
          <div>
            <button type="submit" className="btn btn-success mt-1">Continue</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UsernameFieldContainer;
