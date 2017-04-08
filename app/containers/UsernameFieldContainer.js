import React from 'react';

import userStore from '../stores/UserStore';
import * as UserActions from '../actions/UserActions';
import ButtonField from '../components/ButtonField';

const propTypes = {
  minUsers: React.PropTypes.number,
  maxUsers: React.PropTypes.number,
};

const defaultProps = {
  minUsers: 2,
  maxUsers: 4,
};

const contextTypes = {
  router: React.PropTypes.object.isRequired,
};

class UsernameFieldContainer extends React.Component {

  constructor(props) {
    super(props);
    userStore.initialize(this.props.minUsers);
    this.state = {
      users: userStore.getAllUsers(),
      showRemoveOptions: false,
      showAddUserButton: true,
    };

    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentWillMount() {
    userStore.on('change', this.getAllUsers);
  }

  componentWillUnmount() {
    userStore.removeListener('change', this.getAllUsers);
  }

  getAllUsers() {
    this.setState({ users: userStore.getAllUsers() });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.context.router.push({
      pathname: 'confirmBattle',
      state: {
        users: this.state.users,
      },
    });
  }

  handleAddUser(e) {
    e.preventDefault(); // prevent default behavior of button, namely submit

    // Remove add user button if maximum number of users is reached after adding
    if (this.state.users.length >= this.props.maxUsers - 1) {
      this.setState({ showAddUserButton: false });
    }

    // Add user if maximum number of users is not yet reached
    if (this.state.users.length < this.props.maxUsers) {
      UserActions.addUser();
      this.setState({ showRemoveOptions: true });
    }
  }

  handleRemoveUser(key) {
    // Remove remove options if minimum number of users is reached after removing
    if (this.state.users.length <= this.props.minUsers + 1) {
      this.setState({ showRemoveOptions: false });
    }

    // Remove user if minimum number of users is not yet reached
    if (this.state.users.length > this.props.minUsers) {
      UserActions.removeUser(key);
      this.setState({ showAddUserButton: true });
    }
  }

  renderButtonFields() {
    return this.state.users.map((user, idx) => (
      <ButtonField
        key={user.key}
        id={idx}
        showButton={this.state.showRemoveOptions}
        onChange={e => UserActions.updateUser(user.key, e.target.value)}
        onButtonClick={() => this.handleRemoveUser(user.key)}
      />
    ));
  }

  render() {
    return (
      <div>
        <form
          className="form-horizontal col-sm-6 col-sm-offset-3"
          onSubmit={e => this.handleSubmit(e)}
        >
          {this.renderButtonFields()}
          {this.state.showAddUserButton &&
            <div style={{ margin: '10px' }}>
              <button
                className="btn btn-default"
                onClick={e => this.handleAddUser(e)}
              >
                Add user
              </button>
            </div>
          }
          <div>
            <button type="submit" className="btn btn-success mt-1">Continue</button>
          </div>
        </form>
      </div>
    );
  }
}

UsernameFieldContainer.propTypes = propTypes;
UsernameFieldContainer.defaultProps = defaultProps;
UsernameFieldContainer.contextTypes = contextTypes;

export default UsernameFieldContainer;
