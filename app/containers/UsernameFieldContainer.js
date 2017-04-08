import React from 'react';

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

    this.keyCounter = 0;

    const users = [];
    for (let i = 0; i < this.props.minUsers; i += 1) {
      users.push(this.getNewUser());
    }

    this.state = {
      users,
      showRemoveOptions: false,
      showAddUserButton: true,
    };
  }

  getNewUser() {
    this.keyCounter += 1;
    return {
      key: this.keyCounter,
      username: '',
    };
  }

  handleUpdateUsername(e, idx) {
    const users = this.state.users.slice();
    users[idx].username = e.target.value;

    this.setState({ users });
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
      this.setState({
        users: this.state.users.concat(this.getNewUser()),
        showRemoveOptions: true,
      });
    }
  }

  handleRemoveUser(idx) {
    // Remove remove options if minimum number of users is reached after removing
    if (this.state.users.length <= this.props.minUsers + 1) {
      this.setState({ showRemoveOptions: false });
    }

    // Remove user if minimum number of users is not yet reached
    if (this.state.users.length > this.props.minUsers) {
      this.setState({
        users: this.state.users.filter((user, index) => index !== idx),
        showAddUserButton: true,
      });
    }
  }

  renderButtonFields() {
    return this.state.users.map((user, idx) => (
      <ButtonField
        key={user.key}
        id={idx}
        showButton={this.state.showRemoveOptions}
        onChange={e => this.handleUpdateUsername(e, idx)}
        onButtonClick={() => this.handleRemoveUser(idx)}
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
